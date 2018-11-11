const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('getting tags');
    const sqlText = `SELECT * FROM tags ORDER BY id;`;
    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => { 
        console.log('error getting data', error);
        res.sendStatus(500);
    });
})

module.exports = router;