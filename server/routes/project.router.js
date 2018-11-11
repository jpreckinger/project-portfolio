const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const sqlText = `
        SELECT projects.id, projects.name, description, thumbnail, website,
            github, date_completed, tags.name as tag_name FROM projects
        JOIN tags ON tags.id=projects.tag_id
        ORDER BY date_completed DESC`;
    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => { 
        console.log('error gettting data', error);
        res.sendStatus(500);
    });
})

router.delete('/:id', (req,res) => {
    const sqlText = `DELETE FROM projects WHERE id = $1`;
    const projectId = req.params.id;
    pool.query(sqlText, [projectId])
    .then((response) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        res.sendStatus(500);
    })
})

module.exports = router;