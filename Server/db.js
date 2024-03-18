// const mysql = require('mysql2')

// // create pool of connections
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'manager',
//   database: 'precatfeedback',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// })

// module.exports = pool


const mysql = require('mysql2')


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'manager',
  database: 'feedback_system_db',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
})

module.exports = pool
