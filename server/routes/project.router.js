const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM projects ORDER BY date_completed DESC`)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => { 
        console.log('error gettting data', error);
        res.sendStatus(500);
    });
})

module.exports = router;