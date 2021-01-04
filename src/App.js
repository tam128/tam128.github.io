// import React, { Suspense } from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Home from './pages/Home';
// All of our CSS
import './css/main.scss';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        height: "100%",
        padding: "5%",
    },
    // footer: {
    //     padding: "2%",
    //     marginTop: 'auto',
    //     marginLeft: 'auto',
    // }
})

export default function App() {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                {/* Only useful in development mode */}
                {/*<Route component={NotFound} status={404} />*/}
            </Switch>
        </Router>
        </Container>
    );
}
