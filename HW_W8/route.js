const express = require('express')
const pool = require('./query.js')
const router = express.Router()

router.get("/film", (req, res) => {

    const query = `
        SELECT 
            * 
        FROM film 
            order by 1
    `

    pool.query(query, (err, response) => {
        if(err) throw err

        res.status(200).json(response.rows)
    })
})

router.get("/film/:id", (req, res) => {
    const {id} = req.params;

    const query = `
        SELECT 
            *
        FROM film
            WHERE film_id = $1
    `
    pool.query(query, [id], (err, response) => {
        if(err) throw err

        if(!response.rows[0]) {
            res.status(404).json({
                message: "Data Not Found"
            })
        } else {
            res.status(200).json(response.rows[0])
        }
        
    })
})

router.get("/category", (req, res) => {

    const query = `
        SELECT 
            * 
        FROM category 
            order by 1
    `

    pool.query(query, (err, response) => {
        if(err) throw err

        res.status(200).json(response.rows)
    })
})

router.get("/filmcategory/:id", (req, res) => {
    const {id} = req.params;

    const query = `
        SELECT 
            * 
        FROM category as c 
        JOIN film_category as fc on c.category_id = fc.category_id 
        JOIN film as f on fc.film_id = f.film_id 
        WHERE c.category_id = $1
    `

    pool.query(query, [id], (err, response) => {
        if(err) throw err

        if(!response.rows[0]) {
            res.status(404).json({
                message: "Data Not Found"
            })
        } else {
            res.status(200).json(response.rows)
        }
        
    })

})

module.exports = router;