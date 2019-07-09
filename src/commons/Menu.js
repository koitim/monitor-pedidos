import React from 'react';
import { Link } from "react-router-dom";
/* import { Link } from 'react-router-dom'; */

export default () => (
    <nav className="indigo darken-4" role="navigation">
        <div className="nav-wrapper container">
            <a id="logo-container" href="#" className="brand-logo">React Taskboard</a>
            <ul className="right">
                <li>{/* <Link to='/'> */}Taskboard{/* </Link> */}</li>
                <li>{/* <Link to='/devs'> */}Devs{/* </Link> */}</li>
                <li>{/* <Link to='/about'> */}Sobre{/* </Link> */}</li>
            </ul>
        </div>
    </nav>

) 