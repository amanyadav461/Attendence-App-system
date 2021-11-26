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

    const handleChange = (name, value) => {
        setSelectedValue({
            ...selectedValue,
            [name]: value
        })
    }

    const handleDate = (e) => {
        const { name, value } = e.target
        setSelectedValue({
            ...selectedValue,
            [name]: value
        })
    }

    return (
        <form className="D Download" method="POST">
            <p>Download Form:</p>
            <pre>{JSON.stringify(selectedValue)}</pre>
            <label className="D_programlabel">Program:</label>
            < Select
                name="Program"
                placeholder="Select Program..."
                options={Program}
                onChange={(value) => handleChange("Program", value)}
                value={selectedValue.Program}
            />
            {/* <select
                name="program"
                id="program"
                onChange={handleChange}
                value={attend.program}
            >
                <option disabled selected value>
                    -- Select an option --
                </option>
                <option value="MSC">MSC</option>
                <option value="MCA">MCA</option>
                <option value="BSC">BSC</option>
                <option value="BCA">BCA</option>
            </select> */}
            <label className="D_classlabel">Class:</label>
            < Select
                name="Class"
                placeholder="Select Class..."
                options={Class}
                onChange={(value) => handleChange("Class", value)}
                value={selectedValue.Class}
            />
            {/* <select
                name="class"
                id="class"
                onChange={handleChange}
                value={attend.class}
            >
                <option disabled selected value>
                    -- Select an option --
                </option>
                <option value="FY">FY</option>
                <option value="SY">SY</option>
                <option value="TY">TY</option>
                <option value="KT">KT</option>
            </select> */}
            <label className="D_divisionlabel">Division:</label>
            < Select
                name="Division"
                placeholder="Select Division..."
                options={Division}
                onChange={(value) => handleChange("Division", value)}
                value={selectedValue.Division}
            />
            {/* <select
                name="division"
                id="division"
                onChange={handleChange}
                value={attend.division}
            >
                <option disabled selected value>
                    -- Select an option --
                </option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select> */}
            <label className="D_courselabel">Course:</label>
            < Select
                name="Course"
                placeholder="Select Course..."
                options={MSCCourses}
                onChange={(value) => handleChange("Course", value)}
                value={selectedValue.Course}
            />
            {/* <select
                name="course"
                id="course"
                onChange={handleChange}
                value={attend.course}
            >
                <option disabled selected value>
                    -- Select an option --
                </option>
                <option value="ADBMS">ADBMS</option>
                <option value="Data Science">Data Science</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Digital Image Processing">Digital Image Processing</option>
            </select> */}
            <ul className="date_time-container">
                <li>
                    <label>From Date :</label>
                    <input
                        type="date"
                        name="Datefrom"
                        placeholder="Enter Date"
                        onChange={handleDate}
                        value={selectedValue.Datefrom}
                    />
                </li>
                <li>
                    <label>Till Date :</label>
                    <input
                        type="date"
                        name="Datetill"
                        placeholder="Enter Time"
                        onChange={handleDate}
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