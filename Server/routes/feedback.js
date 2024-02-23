const express = require("express")
const router = express.Router()
const db = require("../db")
const utils = require("../utils")


router.post('/',  (request, response) => {
    const { course_id, groupName, module_id, type_id,staff_id,fromDate, tillDate} = request.body
  
    // get the uploaded file name
    const query = `insert into schedule (course_id , groupName , module_id, type_id ,staff_id,fromDate, tillDate) values ('${course_id}', '${groupName}', '${module_id}', '${type_id}', '${staff_id}', '${fromDate}', '${tillDate}')`
    db.query(query, (error, songs) => {
      response.send(utils.createResult(error, songs))
    })
  })

  
router.get('/schedule', (request, response) => {
    const query = `select * from schedule `
    db.query(query, (error, result) => {
      response.send(utils.createResult(error, result))
    })
  })

  router.post('/submitfeedback',  (request, response) => {
    const { question_id,rating, schedule_id} = request.body
  
    // get the uploaded file name
    const query = `insert into filled_feedback (question_id,rating,schedule_id) values ('${question_id}', '${rating}', '${schedule_id}')`
    db.query(query, (error, songs) => {
      response.send(utils.createResult(error, songs))
    })
  })


  module.exports = router