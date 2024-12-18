const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'noteapp',
})
db.connect(err => {
    if (err) throw err;
    else {
        console.log('Connected to database');
    }
})
module.exports = db;