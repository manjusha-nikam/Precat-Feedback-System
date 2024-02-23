const express = require("express")
const router = express.Router()
const db = require("../db")
const utils = require("../utils")

router.get("/", (request, response) => {
  const query = `select * from course`
  db.query(query, (error, course) => {
    response.send(utils.createResult(error, course))
  })
})


router.get("/course/:cid", (request, response) => {
  const { cid } = request.params
  const query = `SELECT m.* FROM module m INNER JOIN course_module cm ON m.id = cm.module_id WHERE cm.course_id=${cid}`
  db.query(query, (error, course) => {
    response.send(utils.createResult(error, course))
  })
})

router.get('/staff', (request, response) => {
  const query = `select * from employee`
  db.query(query, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})
router.get('/type', (request, response) => {
  const query = `select * from feedback_type`
  db.query(query, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

router.get('/group', (request, response) => {
  const query = `select * from course_group; `
  db.query(query, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

module.exports = router
