import React, { useState } from "react";
import '../scss/_load.scss';
import Select from 'react-select';
// import program from './selectdata';
import { Program, Class, Division, MSCCourses, MCACourses, BCACourses, BSCCourses } from './selectdata';

function Upload() {

    const postSelected = (e) => {
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
        Date: "",
        Time: ""
    });

    const handleChange = (name, value) => {
        setSelectedValue({
            ...selectedValue,
            [name]: value
        })

        // if (selectedValue.Program.value === "MCA") {
        //     document.getElementById('Course').options={MCACourses};
        //     document.querySelector('.Course').options={MCACourses}
        // }
    }

    const handleDateTime = (e) => {
        const { name, value } = e.target
        setSelectedValue({
            ...selectedValue,
            [name]: value
        })
    }

    return (
        <form className="U Upload" method="POST">
            <p>Upload Form:</p>
            <pre>{JSON.stringify(selectedValue)}</pre>
            <label className="U_programlabel">Program:</label>
            < Select
                name="Program"
                placeholder="Select Program..."
                options={Program}
                onChange={(value) => handleChange("Program", value)}
                value={selectedValue.Program}
            />
            {/* <select
                name="Program"
                id="program"
                onChange={handleChange}
                value={selectedValue.Program}
            >
                <option defaultValue>
                    -- Select an option --
                </option>
                <option value="MSC">MSC</option>
                <option value="MCA">MCA</option>
                <option value="BSC">BSC</option>
                <option value="BCA">BCA</option>
            </select> */}
            <label className="U_classlabel">Class:</label>
            < Select
                name="Class"
                placeholder="Select Class..."
                options={Class}
                onChange={(value) => handleChange("Class", value)}
                value={selectedValue.Class}
            />
            {/* <select
                name="Class"
                id="class"
                onChange={handleChange}
                value={selectedValue.Class}
            >
                <option defaultValue>
                    -- Select an option --
                </option>
                <option value="FY">FY</option>
                <option value="SY">SY</option>
                <option value="TY">TY</option>
            </select> */}
            <label className="U_divisionlabel">Division:</label>
            < Select
                name="Division"
                placeholder="Select Division..."
                options={Division}
                onChange={(value) => handleChange("Division", value)}
                value={selectedValue.Division}
            />
            {/* <select
                name="Division"
                id="division"
                onChange={handleChange}
                value={selectedValue.Division}
            >
                <option defaultValue>
                    -- Select an option --
                </option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select> */}
            <label className="U_courselabel">Course:</label>
            < Select
                className="Course"
                name="Course"
                placeholder="Select Course..."
                options={MSCCourses}
                onChange={(value) => handleChange("Course", value)}
                value={selectedValue.Course}
            />
            {/* <select
                name="Course"
                id="course"
                onChange={handleChange}
                value={selectedValue.Course}
            >
                <option defaultValue>
                    -- Select an option --
                </option>
                <option value="ADBMS">ADBMS</option>
                <option value="Data Science">Data Science</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Digital Image Processing">Digital Image Processing</option>
            </select> */}
            <ul className="date_time-container">
                <li>
                    <label>Date :</label>
                    <input
                        name="Date"
                        type="date"
                        placeholder="Enter Date"
                        onChange={handleDateTime}
                        value={selectedValue.Date}
                    />
                </li>
                <li>
                    <label>Time :</label>
                    <input
                        name="Time"
                        type="time"
                        placeholder="Enter Time"
                        onChange={handleDateTime}
                        value={selectedValue.Time}
                    />
                </li>
            </ul>
            <br />
            <ul className="browse_upload-container">
                <li>
                    <label>File :</label>
                    <input type="file" className='upload' accept=".csv" required></input>
                    <button type="submit" id="submit-file" class="btn btn-primary">Upload File</button>
                </li>
                <li>
                    <input
                        type="submit"
                        value="Submit"
                        onClick={postSelected}
                    />
                </li>
            </ul>
        </form>
    );
}

export default Upload;