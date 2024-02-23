const mysql = require('mysql2')

// create pool of connections
const pool = mysql.createPool({
  host: '172.18.4.43',
  user: 'sunbeam',
  password: 'SUNBEAM',
  database: 'feedback_system_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

module.exports = pool