package server

import (
	"fmt"
	"net/http"
	"path"
	"html/template"

	"github.com/tam128/tam128.github.io/internal/webpack"
)

// Handler returns http.Handler for server endpoint
func Handler(buildPath string) http.HandlerFunc {
	tmpl, err := template.ParseFiles(path.Join("build", "index.html"))

	if err != nil {
		return func(res http.ResponseWriter, req *http.Request) {
			http.Error(res, err.Error(), http.StatusInternalServerError)
		}
	}

	data, err := NewViewData(buildPath)

	if err != nil {
		return func(res http.ResponseWriter, req *http.Request) {
			http.Error(res, err.Error(), http.StatusInternalServerError)
		}
	}

	return func(res http.ResponseWriter, req *http.Request) {
		if err := tmpl.Execute(res, data); err != nil {
			http.Error(res, err.Error(), http.StatusInternalServerError)
		}
	}
}

// User represents current user session
type User struct {
	Email     string
	FirstName string
	LastName  string
}

// ViewData contains data for the view
type ViewData struct {
	CurrentUser User
	Webpack     *webpack.Webpack
}

func NewViewData(buildPath string) (ViewData, error) {
	wp, err := webpack.New(buildPath)

	if err != nil {
		return ViewData{}, fmt.Errorf("failed to read webpack configuration: %w", err)
	}

	return ViewData{
		CurrentUser: User{
			Email:     "bill@example.com",
			FirstName: "Bill",
			LastName:  "Black",
		},
		Webpack: wp,
	}, nil
}