const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')




router.post('/signin', (request, response) => {
  const { email, password } = request.body
console.log("studentlogin"+email,password)
  // encrypt the password
  // const encryptedPassword = cryptoJs.MD5(password)

  const query = `select id, firstName, lastName, email, mobile from student where email = '${email}' and password = '${password}'`

  db.query(query, (error, users) => {
    if (error) {
      // when there is an error from MySQL side
      response.send(utils.createError(error))
    } else {
      // user with correct email and password does not exist
      if (users.length == 0) {
        response.send(utils.createError('invalid user name or password'))
      } else {
        response.send(utils.createResult(error, users[0]))
      }
    }
  })
})








module.exports = router
