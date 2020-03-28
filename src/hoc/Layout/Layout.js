import React from 'react';
import "./Layout.css";
import Sidebar from '../../containers/Sidebar/Sidebar';

// layout wrapper for pages
const Layout = (props) => {
    return (
        <div className="Layout">
            <h1>Layout</h1>
            <Sidebar />
            {props.children}
        </div>
    )
}

export default Layout;