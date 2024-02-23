const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')


router.get('/', (request, response) => {
    const query = `select * from course`
    db.query(query, (error, course) => {
      response.send(utils.createResult(error, course))
    })
  })

  router.get('/course/:cid', (request, response) => {
    const { cid } = request.params
    console.log(cid)
    const query = `select * from course_module where course_id =${cid}`
    db.query(query, (error, course) => {
      response.send(utils.createResult(error, course))
    })
  })


  
module.exports = router