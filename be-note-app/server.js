const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'noteapp',
})

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});
  

  

const port = 5004;
  app.listen({port}, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
