package main

import (
	"log"
	"net/http"
	"path"

	"github.com/spf13/pflag"
	"github.com/spf13/viper"
	"github.com/tam128/tam128.github.io/internal/server"

	"go.uber.org/zap"
)

func setupLogging() {
	l, err := zap.NewProduction()
	if err != nil {
		log.Fatalf("can't initialize zap logger: %v", err)
	}
	zap.ReplaceGlobals(l)
}

func main() {
	setupLogging()

	pflag.String("address", "127.0.0.1:8080", "address")
	pflag.String("buildPath", "build", "build path for static assets")
	pflag.Parse()

	err := viper.BindPFlags(pflag.CommandLine)
	if err != nil {
		zap.L().Fatal("unable to parse flags", zap.Error(err))
	}

	staticPath := path.Join(viper.GetString("buildPath"), "/static/")

	http.HandleFunc("/", server.Handler(viper.GetString("buildPath")))
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir(staticPath))))

	// listen and serve using http.DefaultServeMux
	zap.L().Fatal("unable to listen and serve", zap.Error(http.ListenAndServe(":8080", nil)))
}
