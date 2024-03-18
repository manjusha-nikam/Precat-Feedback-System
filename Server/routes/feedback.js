const express = require("express")
const router = express.Router()
const db = require("../db")
const utils = require("../utils")


router.post('/',  (request, response) => {
    const { course_id, course_group_id, module_id, type_id,staff_id,fromDate, tillDate} = request.body
  console.log(course_id)
   
    
    const query = `insert into schedule (course_id , course_group_id , module_id, type_id ,staff_id,fromDate, tillDate) values ('${course_id}', '${course_group_id}', '${module_id}', '${type_id}', '${staff_id}', '${fromDate}', '${tillDate}')`
   console.log(query)
    db.query(query, (error, result) => {
      response.send(utils.createResult(error, result))
    })
  })

  
router.get('/schedule', (request, response) => {
    const query = `select s.id, c.courseName,cg.groupName,m.moduleName,f.type,e.firstName, s.fromDate,s.tillDate from course c 
    inner join schedule s on c.id =s.course_id
    inner join course_group cg on cg.id = s.course_group_id 
    inner join module m on m.id = s.module_id inner join feedback_type f on f.id = s.type_id 
    inner join employee e on e.empid = s.staff_id; `
    db.query(query, (error, result) => {
      response.send(utils.createResult(error, result))
    })
  })

  router.post('/submitfeedback',  (request, response) => {
    const { question_id,rating, schedule_id} = request.body
  
    
    const query = `insert into filled_feedback (question_id,rating,schedule_id) values ('${question_id}', '${rating}', '${schedule_id}')`
    db.query(query, (error, songs) => {
      response.send(utils.createResult(error, songs))
    })
  })

  

  router.get('/:tid', (request, response) => {
    const { tid } = request.params
    const query = `select question from question where type_id = ${tid}`
    db.query(query, (error, result) => {
      response.send(utils.createResult(error, result))
    })
  })




 


  module.exports = router