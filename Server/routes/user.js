const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')


router.get('/all', (request, response) => {
  const query = `select * from employee`
  db.query(query, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})






module.exports = router
