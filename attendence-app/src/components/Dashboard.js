import React, { useState } from "react";
import Upload from './Upload.js';
import Download from './Download';
import '../scss/_Dashboard.scss';

import Dashlogo from '../assets/somaiya.png';
import Uploadicon from '../assets/upload-w.png';
import Downloadicon from '../assets/download-w.png';
import Dropdownicon from '../assets/sort-down-up.png';
import Usericon from '../assets/user-o.png';

// import { useHistory } from 'react-router-dom';

// import {BrowserRouter as Router, Switch, Route } 'react-router-dom';

function Dashboard ({ setLoginuser }) {

    const [subcomponent, setSubComponent] = useState("UploadComponent");  

    // const history = useHistory();

    return (
        <div className="DashboardContainer">
            <ul className="topbar">
                <li className="dashlogo">
                    <img src={Dashlogo} alt={"Dashboard logo"} />
                </li>
                <li className="user-logout">
                    <img className="log-icon" src={Usericon} alt={"user icon"} />
                    {'username'}
                    <img className="drop-icon" src={Dropdownicon} alt={"dropdown icon"} />
                    <div className="drop-down" onClick={() => setLoginuser({})}>
                        <p>logout</p>
                    </div>
                </li>
            </ul>
            <hr />
            <div className="nav-form">
                <nav>
                    <ul className="sidebar">
                        <li>
                            <span onClick={() => setSubComponent("UploadComponent")}>
                                <img src={Uploadicon} alt={"Upload icon"} />
                                Upload
                            </span>
                            <hr />
                        </li>
                        <li>
                            <span onClick={() => setSubComponent("DownloadComponent")}>
                                <img src={Downloadicon} alt={"Download icon"} />
                                Download
                            </span>
                            < hr />
                        </li>
                    </ul>
                </nav>
                {subcomponent === "UploadComponent" && < Upload />}
                {subcomponent === "DownloadComponent" && <Download />}
            </div>
        </div>
    );
}

export default Dashboard;