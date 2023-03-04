const express = require('express')
const router = express.Router()
const pool = require('../config.js')

router.get('/movies', (req, res, next) => {
    
    const query = `
        SELECT 
            * 
        FROM movies 
        order by 1
    `

    pool.query(query, (err, response) => {
        if(err) next(err)

        res.status(200).json(response.rows)
    })

})

router.get('/movies/:id', (req, res, next) => {
    const {id} = req.params;

    const query = `
        SELECT 
            *
        FROM movies
        WHERE id = $1
    `
    pool.query(query, [id], (err, response) => {
        if(err) next(err)

        if(response.rows.length === 0) {
            next({name : "NotFound"})
        } else {
            res.status(200).json(response.rows[0])
        }
        
    })
})

router.post('/movies/add', (req, res, next) => {
    
    const {title, genres, year} = req.body;
    
    const query = `
        INSERT INTO movies (title, genres, year)
            VALUES
            ($1, $2, $3)
    `

    pool.query(query, [title, genres, year], (err, response) => {
        if (err) next(err)

        res.status(201).json({
            message: "Data Added Successfully"
        })
    })
})

router.put("/moviesupdate/:id", (req, res, next) => {
    const {id} = req.params;
    const {title, genres, year} = req.body;

    const checkQuery = `
        SELECT 
            *
        FROM movies
        WHERE id = $1
    `

    pool.query(checkQuery, [id], (err, response) => {
        if(err) next(err)

        if(response.rows[0]) {

            const updateQuery = `
                UPDATE movies
                SET title = $2,
                    genres = $3,
                    year = $4
                WHERE id = $1;
            `

            pool.query(updateQuery, [id, title, genres, year], (err, response) => {
                if(err) next(err)

                res.status(200).json({
                    message: "Data Updated successfully"
                })
            })

        } else {
            next({name : "idNotFound"})
        }

    })

})

router.delete("/moviesupdate/:id", (req, res, next) => {
    const {id} = req.params;

    const checkQuery = `
        SELECT 
            *
        FROM movies
        WHERE id = $1
    `

    pool.query(checkQuery, [id], (err, response) => {
        if(err) next(err)

        if(response.rows[0]) {

            const deleteQuery = `
                DELETE FROM movies
                WHERE id = $1;
            `

            pool.query(deleteQuery, [id], (err, response) => {
                if(err) next(err)

                res.status(200).json({
                    message: "Data Deleted successfully"
                })
            })

        } else {
            next({name : "idNotFound"})
        }

    })

})

module.exports = router
