import axios from "axios"
import React, { useState, useEffect } from 'react';
import { URL } from '../../config'
import { toast } from 'react-toastify'
import DatePicker from 'react-datepicker/dist/react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom'


const ScheduleFB = () =>{
      const [Courses, setCourses] = useState([]);
      const [selectedValueCourse, setSelectedValueCourse] = useState('');
      const [Modules, setModules] = useState([]);
      const [selectedValueModules, setSelectedValueModules] = useState('');
      const [Groups, setGroups] = useState([]);
      const [selectedValueGroups, setSelectedValueGroups] = useState('');
      const [Types, setTypes] = useState([]);
      const [selectedValueTypes, setSelectedValueTypes] = useState('');
      const [Staffs, setStaffs] = useState([]);
      const [selectedValueStaffs, setSelectedValueStaffs] = useState('');
      const [startDate, setStartDate] = useState(new Date());
      const [endDate, setEndDate] = useState(new Date());

      const navigate = useNavigate()
      useEffect(() => {
                getCourse();
                getGroup();
                feedbackType();
                getStaffs();
                getModule();
                },[]);
        
            const getCourse = ()=>{
                const url = `${URL}/course/courses`
        
                axios.get(url).then((response) =>{
                    const result = response.data
                    //console.log(result)
                    setCourses(result.data)
        
                })
            }

            const getModule = ()=>{
              const url = `${URL}/course/modules`
      
              axios.get(url).then((response) =>{
                  const result = response.data
                  //console.log(result)
                  setModules(result.data)
      
              })
          }
        
            const getGroup = ()=>{
                const url = `${URL}/course/group`
        
                axios.get(url).then((response) =>{
                    const result = response.data
                    //console.log(result)
                    setGroups(result.data)
        
                })
            }
        
            const feedbackType = ()=>{
                const url = `${URL}/course/type`
        
                axios.get(url).then((response) =>{
                    const result = response.data
                    //console.log(result)
                    setTypes(result.data)
        
                })
            }
        
            const getStaffs = ()=>{
              const url = `${URL}/course/staff`
        
              axios.get(url).then((response) =>{
                  const result = response.data
                 // console.log(result)
                  setStaffs(result.data)
        
              })
          }
        
          
            const handleDropdownChange = (event) => {
              setSelectedValueStaffs(event.target.value);
              //setSelectedValueCourse(event.target.value);
              };

              const handleDropdownChange1 = (event) => {
                //setSelectedValueStaffs(event.target.value);
                setSelectedValueCourse(event.target.value);
                };

                const handleDropdownChange2 = (event) => {
                  //setSelectedValueStaffs(event.target.value);
                  setSelectedValueGroups(event.target.value);
                  };

                  const handleDropdownChange3 = (event) => {
                    //setSelectedValueStaffs(event.target.value);
                    setSelectedValueTypes(event.target.value);
                    };

                    const handleDropdownChange4 = (event) => {
                      //setSelectedValueStaffs(event.target.value);
                      setSelectedValueModules(event.target.value);
                      };
          
        
              const handleFromDateChange = (date) => {
                setStartDate(date);
            };
            
            const handleToDateChange = (date) => {
                setEndDate(date);
            };

            const setFeedback = () =>{
             const selectedStaffObject = Staffs.find(staff => staff.firstName === selectedValueStaffs);
             const selectedCourseObject = Courses.find(course => course.courseName === selectedValueCourse)
             const selectGroupObject = Groups.find(group => group.groupName == selectedValueGroups)
             const selectTypeObject = Types.find(type => type.type === selectedValueTypes)
             const selectModuleObject = Modules.find(module =>module.moduleName === selectedValueModules)
           // const startDateFormatted = startDate.startDate.toISOString().split('T')[0];
           // const endDateFormatted = endDate.toISOString().split('T')[0];

           const fromDate = new Date('2024-03-18T11:27:46.000Z').toISOString().slice(0, 10);
           const tillDate = new Date('2024-03-20T11:27:46.000Z').toISOString().slice(0, 10);
            // console.log("+++++"+startDate)
            
            
             if (selectedStaffObject && selectedCourseObject && selectGroupObject && selectTypeObject && selectModuleObject ) {
              //  console.log("Selected Staff's First Name:", selectedStaffObject.firstName)
              //  console.log("id",selectedStaffObject.empid)
              //  console.log("course - id", selectedCourseObject.id)
              //  console.log("Group - id", selectGroupObject.id)
              //  console.log("Type - id", selectTypeObject.id)
              
              const body = {
                     staff_id : selectedStaffObject.empid,
                     course_id : selectedCourseObject.id,
                     course_group_id : selectGroupObject.id,
                     type_id: selectTypeObject.id,
                     module_id : selectModuleObject.id,
                     fromDate : fromDate,
                     tillDate : tillDate
              };
              console.log("++++++"+body.startDate)
              axios.post(`${URL}/feedback`, body)
              .then(response => {
                const result = response.data
                console.log("++++++++"+result)
                 if (result['status'] === 'success') {
                    toast.success('successfully adde a new feedback')
           navigate('/list')
          } else {
            toast.error(result['error'])
          }
              })
              .catch(error => {
                console.error("Error inserting feedback:", error);
              });


             }else
             console.log("something went wrong")
           
             
             
             
            

            }
           

  return (
    <div>
     <div className='container' style={{ marginTop: 20 }}>
      <h3 style={{ textAlign: 'center', marginBottom: 50 }}>Schedule Feedback</h3>
      
       <div className='form'> 
      {/* <div className='row'>
        <div
          className='col'
          style={{ borderRightStyle: 'solid', borderRightColor: 'lightgray' }}> */}
           <div className='mb-3'>
          <label >Course</label>
           <select value={selectedValueCourse} onChange={handleDropdownChange1}>
           <option value="">Select an Course</option>
           {Courses.map((course1, index) => (
             <option key={index} value={course1.courseName}>{course1.courseName}</option>
           ))}
         </select>
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Group</label>
          <select value={selectedValueGroups} onChange={handleDropdownChange2}>
           <option value="">Select Group</option>
           {Groups.map((group1, index) => (
             <option key={index} value={group1.groupName}>{group1.groupName}</option>
           ))}
         </select>
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Type</label>
          <select value={selectedValueTypes} onChange={handleDropdownChange3}>
           <option value="">Select Feedback Type </option>
           {Types.map((Type, index) => (
             <option key={index} value={Type.type}>{Type.type}</option>
           ))}
         </select>
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Staff</label>
          <select value={selectedValueStaffs} onChange={handleDropdownChange}>
           <option value="">Select Staff</option>
           {Staffs.map((Staff1, index) => (
            <option key={index} value={Staff1.firstName}>{Staff1.firstName}</option>
           ))}
         </select>
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Module</label>
          <select value={selectedValueModules} onChange={handleDropdownChange4}>
           <option value="">Select Module</option>
           {Modules.map((Module, index) => (
            <option key={index} value={Module.moduleName}>{Module.moduleName}</option>
           ))}
         </select>
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Start Date</label>
          <DatePicker selected={startDate} onChange={handleFromDateChange} />
        </div>
        
        <div className='mb-3'>
          <label htmlFor=''>End Date</label>
          <DatePicker selected={endDate} onChange={handleToDateChange} />
        </div>

        <div className='mb-3'>
          <button
            onClick={setFeedback}
            style={{ marginRight: 10 }}
            className='btn btn-success'>
            Set Feedback
          </button>
          <button className='btn btn-danger'>Cancel</button>
        </div>
        </div>
      </div>
      </div>
    
  )
}

export default ScheduleFB



