const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')


router.get('/', (request, response) => {
    const query = `select * from course`
    db.query(query, (error, result) => {
      response.send(utils.createResult(error, result))
    })
  })


  
module.exports = router