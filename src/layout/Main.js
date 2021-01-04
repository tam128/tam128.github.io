import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/Nav';
import { Helmet } from 'react-helmet';

const Main = (props) => (
    <>
        {/*<Analytics />*/}
        {/*<ScrollToTop />*/}
        <Helmet titleTemplate="%s | Tammy Ma" defaultTitle="Tammy Ma" />
        <div id="wrapper">
            <Nav />
            <div id="main">
                {props.children}
            </div>
            {/*{props.fullPage ? null : <Nav />}*/}
        </div>
    </>
);

Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
};

Main.defaultProps = {
    children: null,
    fullPage: false,
};

export default Main;
