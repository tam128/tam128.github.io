// import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
//
// const useStyles = makeStyles({
//     root: {
//         border: '1px solid #e9e9e9',
//         '&:not(:first-of-type)': {
//             marginLeft: -1,
//         },
//         background: '#f7f7f7',
//         opacity: 1,
//     },
//     selected: {
//         borderBottomWidth: 0,
//         background: '#ffffff',
//         '& $wrapper': {
//             opacity: 1,
//         },
//     },
//     wrapper: {
//         opacity: 0.7,
//     },
//     indicator: {
//         display: 'none',
//     },
// })
//
// export default function Nav() {
//     const [tabIndex, setTabIndex] = React.useState(0);
//     const tabsStyles = useStyles();
//     return (
//         <Tabs
//             classes={tabsStyles}
//             value={tabIndex}
//             onChange={(e, index) => setTabIndex(index)}
//         >
//             <Tab classes={tabsStyles.indicator} label={'Home'} />
//             <Tab classes={tabsStyles.indicator} label={'About'} />
//             <Tab classes={tabsStyles.indicator} label={'Posts'} />
//         </Tabs>
//     );
// };

import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Hamburger from './Hamburger';
import routes from '../data/routes';

const useStyles = makeStyles({
    root: {
        // border: '1px solid #e9e9e9',
        // '&:not(:first-of-type)': {
        //     marginLeft: -1,
        // },
        // background: '#f7f7f7',
        // opacity: 1,
    },
})

const Nav = () => (
    <header id="header">
        <h1 className="index-link">
            {routes.filter((l) => l.index).map((l) => (
                <Link key={l.label} to={l.path}>{l.label}</Link>
            ))}
        </h1>
        <nav className="links">
            <ul>
                {routes.filter((l) => !l.index).map((l) => (
                    <li key={l.label}>
                        <Link to={l.path}>{l.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
        <Hamburger />
    </header>
);

export default Nav;
