import React, { useState } from "react";
import '../scss/_load.scss';
// import Axios from 'axios'; // npm install axios on your client side
import Select from 'react-select';
// import program from './selectdata';
import { Program, Class, Division, MSCCourses, MCACourses, BCACourses, BSCCourses } from './selectdata';
function Download() {

    const requestSelected = (e) => {
        e.preventDefault();
        // Axios.post('http://localhost:5000/login', attend)
        // .then(res => {
        //     alert(res.data.message)
        // })
        console.log(selectedValue);
    };

    // set value for default selection
    const [selectedValue, setSelectedValue] = useState({
        Program: "",
        Class: "",
        Division: "",
        Course: "",
        Datefrom: "",
        Datetill: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setSelectedValue({
            ...selectedValue,
            [name]: value
        })
    }

    return (
        <form className="D Download" method="POST">
            <p>Download Form:</p>
            <label className="D_programlabel">Select Program:</label>
            < Select
                name="Program"
                options={Program}
                onChange={handleChange}
                value={selectedValue.Program}
            />
            <br />
            <pre>{JSON.stringify(selectedValue)}</pre>
            <label className="D_classlabel">Select Class:</label>
            < Select
                name="Class"
                options={Class}
                onChange={handleChange}
                value={selectedValue.Class}
            />
            <label className="D_divisionlabel">Select Division:</label>
            < Select
                name="Division"
                options={Division}
                onChange={handleChange}
                value={selectedValue.class}
            />
            <label className="D_courselabel">Select Course:</label>
            < Select
                name="Course"
                options={MSCCourses}
                onChange={handleChange}
                value={selectedValue.Course}
            />
            <ul className="date_time-container">
                <li>
                    <label>From Date :</label>
                    <input
                        type="date"
                        name="Datefrom"
                        placeholder="Enter Date"
                        onChange={handleChange}
                        value={selectedValue.Datefrom}
                    />
                </li>
                <li>
                    <label>Till Date :</label>
                    <input
                        type="date"
                        name="Datetill"
                        placeholder="Enter Time"
                        onChange={handleChange}
                        value={selectedValue.Datetill}
                    />
                </li>
            </ul>
            <br />
            <ul className="browse_upload-container">
                <li>
                    <label>File :</label>
                    <input type="file" className='upload' accept=".csv" required></input>
                    <button type="submit" id="submit-file" class="btn btn-primary">Download File</button>
                </li>
                <li>
                    <input
                        type="submit"
                        value="Submit"
                        onClick={requestSelected}
                    />
                </li>
            </ul>
        </form>
    );
}

export default Download;