import Navbar from "../../component/Navbar"
import axios from "axios"
import React, { useState, useEffect } from 'react';
import { URL } from '../../config'

const ScheduleFB = () =>{
    const [courses, setCourses] = useState([]);
    const [selectedValueCourse, setSelectedValueCourse] = useState('');
    const [groups, setGroups] = useState([]);
    const [selectedValueGroups, setSelectedValueGroups] = useState('');
    const [Types, setTypes] = useState([]);
    const [selectedValueTypes, setSelectedValueTypes] = useState('');


    useEffect(() => {
        getCourse();
        getGroup();
        feedbackType();
        },[]);

    const getCourse = ()=>{
        const url = `${URL}/course/courses`

        axios.get(url).then((response) =>{
            const result = response.data
            console.log(result)
            setCourses(result.data)

        })
    }

    const getGroup = ()=>{
        const url = `${URL}/course/group`

        axios.get(url).then((response) =>{
            const result = response.data
            console.log(result)
            setGroups(result.data)

        })
    }

    const feedbackType = ()=>{
        const url = `${URL}/course/type`

        axios.get(url).then((response) =>{
            const result = response.data
            console.log(result)
            setTypes(result.data)

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
            <option key={index} value={course1.courseName}>{course1.courseName}</option>
          ))}
        </select>
        
      
        </div>
        <div>
          <label>Group</label>
          <select value={selectedValueGroups} onChange={handleDropdownChange}>
          <option value="">Select an option</option>
          {groups.map((group1, index) => (
            <option key={index} value={group1.groupName}>{group1.groupName}</option>
          ))}
        </select>
        </div>

        <div>
          <label>Feedback Type</label>
          <select value={selectedValueTypes} onChange={handleDropdownChange}>
          <option value="">Select an option</option>
          {Types.map((Type, index) => (
            <option key={index} value={Type.type}>{Type.type}</option>
          ))}
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