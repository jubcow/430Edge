import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

import './hp.css';
//import woodard from './assets/images/woodard.jpg';

ReactDOM.render(
        /*
        <React.StrictMode>
        <App />
        </React.StrictMode>,
        */
        <div id="parent">
        <ul>
                <center><div class="white"><h1>The EDGE Program</h1></div></center>
                <li><a href="/Login">Login</a></li>
                <li><a href="/About">About</a></li>
        </ul>
        <div class="bgColor">
              <br></br>
        </div>
        </div>,

  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
