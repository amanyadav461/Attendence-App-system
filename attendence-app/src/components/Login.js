import React, { useState } from "react";
import BGimage from '../assets/BG-login.jpg';
import Logo from '../assets/SKSC-Logo.svg';
import Axios from 'axios'; // npm install axios on your client side
import '../scss/_Login.scss';


import { useHistory } from 'react-router-dom';

function Login({setLoginuser}) {

    const history = useHistory();

    const loginUser = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/login', user)
        .then(res => {
            alert(res.data.message)
            setLoginuser(res.data.user)
            history.push("/dashboard")
        })
    };  

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        // name = e.target.name;
        // value = e.target.value;
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <div className="logincontainer">
            <div className="bgimage">
                <img src={BGimage} alt={"Background"} />
            </div>
            <div className="formcontainer">
                <ul>
                    <li className="logo">
                        <img src={Logo} alt={"Logo"} />
                    </li>
                </ul>
                <div className="text">
                    <h1>Welcome to Somaiya Attendence Portal</h1>
                    <p>Please enter your Somaiya ID & Password</p>
                </div>
                <form id="form" method="POST">
                    <div id="error"></div>
                    <label>
                        <input
                            type="text"
                            name="username"
                            value={user.username}
                            id="username"
                            className="input-text username"
                            // onChange={(e) => {
                            //     username(e.target.value);
                            // }}
                            onChange={handleChange}
                        />
                        <div className="placeholder">Username <span className="required">*</span> </div>
                    </label>
                    <label>
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            id="password"
                            className="input-text password"
                            // onChange={(e) => {
                            //     Password(e.target.value);
                            // }}
                            onChange={handleChange}
                        />
                        <div className="placeholder">Password <span className="required">*</span> </div>
                    </label>
                    <div className="submit-btn">
                        <input
                            type="submit"
                            value="Submit"
                            onClick={loginUser}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}


export default Login;

