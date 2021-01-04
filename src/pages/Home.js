import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';
import Main from "../layout/Main";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    // paper: {
    //     minHeight: "65px",
    //     display: 'flex',
    //     flexWrap: "wrap",
    //     justifyContent: "space-evenly"
    // },
    media: {
        minHeight: 25,
        minWidth: 25,
    },
    // skills: {
    //     fontVariant: "all-small-caps",
    //     fontSize: "large",
    //     border: "thin",
    //     borderStyle: "dotted",
    //     borderRadius: "5px",
    //     margin: "5px 5px 5px 8px",
    //     padding: "5px",
    //     background: "#dbe9f1",
    //     fontWeight: "bold",
    //     textDecoration: "none",
    //     color: "#0a3f5e"
    // },
    // contact: {
    //     margin: "20px 10px 0px 0px",
    // },
    // items: {
    //     margin: "5px",
    // },
    // links: {
    //     color: "black",
    //     borderBottomStyle: "dotted",
    //     border: "thin",
    // },
    // header: {
    //     textAlign: "left",
    //     padding: "5%",
    //     margin: "1%"
    // }
});

export default function Home() {
    // const {firstName, headline, profilePic} = data
    // const profilepic= "images/" + profilePic;
    const classes = useStyles();

    return (
        <Main>
        <Grid container spacing={5} className={classes.root}>
            <Grid item xs={12}>
                <Card>
                    {/* Container within the card for flex grid */}
                    <Grid container className={classes.root}>
                        <Grid item sm={3} className={classes.media}>
                            <CardMedia
                                className={classes.media}
                                image="../images/profile.png"
                            />
                        </Grid>
                        <Grid item sm={5}>
                            <CardContent className={classes.header}>
                                <Typography gutterBottom variant="h3" component="h3">
                                    Hi, I'm Tammy
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item sm={5}>
                        </Grid>
                    </Grid>
                    <CardContent>
                        <Typography variant="body2" gutterBottom>
                            Before joining the world of <code>tech</code>, I studied <strong>philosophy, psychology, economics, math,</strong> and <strong>international relations</strong>. I worked in <strong>finance, law</strong>, and <strong>education</strong>.
                            <br></br>
                            <br></br>
                            I learned to <code>code</code> in 4th grade, making web pages on Neopets with <strong>HTML</strong>. Fast forward a few years to studying for the LSAT, when I realized that I only really enjoyed the logic puzzles section. I was reminded of everything I love about <strong>computer science</strong> - Boolean algebra, truth tables, and objectivity. So I moved to <strong>San Francisco</strong>, completed Flatiron School's Full Stack Web Development <Link className={classes.links} underline="none" href="https://flatironschool.com/career-courses/coding-bootcamp/san-francisco">immersive</Link>, and have been loving every day of the developer life since. As they say, <code>window.history.pushState("the rest", "is")</code>
                            <br></br>
                            <br></br>
                            Other passions: dogs, piano, kickboxing, travel, weird food, and <Link className={classes.links} underline="none" href="https://www.instagram.com/p/B-AJtycgYKU/?igshid=12f3s8qalj71s">memes</Link>.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        </Main>
    );
}
