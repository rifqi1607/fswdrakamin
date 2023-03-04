const express = require('express')
const router = express.Router()
const pool = require('../config.js')

router.get('/users', (req, res, next) => {
    
    const query = `
        SELECT 
            * 
        FROM users 
            order by 1
    `

    pool.query(query, (err, response) => {
        if(err) next(err)

        res.status(200).json(response.rows)
    })

})

router.get('/users/:id', (req, res, next) => {
    const {id} = req.params;

    const query = `
        SELECT 
            *
        FROM users
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

router.post('/users/add', (req, res, next) => {
    
    const {email, gender, password, role} = req.body;
    
    const query = `
        INSERT INTO users (email, gender, password, role)
            VALUES
            ($1, $2, $3, $4)
    `

    pool.query(query, [email, gender, password, role], (err, response) => {
        if (err) next(err)

        res.status(201).json({
            message: "Data Added Successfully"
        })
    })
})

router.put("/usersupdate/:id", (req, res, next) => {
    const {id} = req.params;
    const {email, gender, password, role} = req.body;

    const checkQuery = `
        SELECT 
            *
        FROM users
        WHERE id = $1
    `

    pool.query(checkQuery, [id], (err, response) => {
        if(err) next(err)

        if(response.rows[0]) {

            const updateQuery = `
                UPDATE users
                SET email = $2,
                    gender = $3,
                    password = $4,
                    role = $5
                WHERE id = $1;
            `

            pool.query(updateQuery, [id, email, gender, password, role], (err, response) => {
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

router.delete("/usersupdate/:id", (req, res, next) => {
    const {id} = req.params;

    const checkQuery = `
        SELECT 
            *
        FROM users
        WHERE id = $1
    `

    pool.query(checkQuery, [id], (err, response) => {
        if(err) next(err)

        if(response.rows[0]) {

            const deleteQuery = `
                DELETE FROM users
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
