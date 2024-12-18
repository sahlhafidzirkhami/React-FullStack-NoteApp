  const express = require('express');
  const cors = require('cors');
  const bodyParser = require('body-parser');
  const db=require('./dbConnection');

  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  app.get('/notes', (req, res) => {
    const sql = 'SELECT * FROM notes';
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Database query error');
        } else {
            res.json(results);
        }
    });
});

  const port = 5004;
    app.listen({port}, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
