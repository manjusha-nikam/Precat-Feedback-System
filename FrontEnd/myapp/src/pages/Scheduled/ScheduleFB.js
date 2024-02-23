import Navbar from "../../component/Navbar"
import axios from "axios"
import React, { useState, useEffect } from 'react';
import { URL } from '../../config'

const ScheduleFB = () =>{
    const [courses, setCourses] = useState([]);
    const [selectedValueCourse, setSelectedValueCourse] = useState('');

    useEffect(() => {
        getCourse()
        },[]);

    const getCourse = ()=>{
        const url = `${URL}/course/courses`

        axios.get(url).then((response) =>{
            const result = response.data
            console.log(result)
            setCourses(result.data)

        })
    }

    const handleDropdownChange = (event) => {
        selectedValueCourse(event.target.value);
      };

    return(
        <>

    {/* <div className="col-md-8" >
     <div class="leftside">
     <Navbar/>
    </div>
  </div> */}

  <div className="col-md-8" >
        <div class="leftside">
          <label _ngcontent-c11 for>Course</label>
          <select value={selectedValueCourse} onChange={handleDropdownChange}>
          <option value="">Select an option</option>
          {courses.map((course1, index) => (
            <option key={index} value={course1}>{course1}</option>
          ))}
        </select>
        
      
        </div>
        <div>
          <label>Module</label>
          <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </div>
        <div>
          <label>Feedback Type</label>
          <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </div>
        <div>
          <label>From Date</label>
        </div>
        <div>
          <label>To Date</label>
        </div>
        <div>
          <label>Staff</label>
        </div>

        </div>
        </>
    )

}

export default ScheduleFB