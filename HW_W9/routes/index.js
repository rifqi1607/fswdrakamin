const express = require('express')
const router = express.Router()
const moviesRouter = require('./movies.js')
const userRouter = require('./users.js')
const pool = require('../config.js')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)
const jwt = require('jsonwebtoken')
const secretToken = "INIKODERAHASIA"
const {authentication} = require('../middlewares/auth.js')

router.post('/login', (req, res, next) => {
    const {email, password} = req.body;

    const query = `
        SELECT 
            *
        FROM users
            WHERE email = $1
    `
    pool.query(query, [email], (err, response) => {
        if(err) next(err)

        if(response.rows.length === 0) {
            next({name : "UserNotFound"})
        } else {
            const data = response.rows[0]
            const compare = bcrypt.compareSync(password, data.password)

            if(compare) {
                const accessToken = jwt.sign({
                    id : data.id,
                    email : data.email,
                    role : data.role
                }, secretToken)

                res.status(200).json({
                    id : data.id,
                    email : data.email,
                    role : data.role,
                    token : accessToken
                })
            } else {
                next({name : "WrongPassword"})
            }
        }
        
    })

})

router.post('/register', (req, res, next) => {
    const {email, gender, password, role} = req.body
    const hash = bcrypt.hashSync(password, salt)

    const query = `
        INSERT INTO users (email, gender, password, role)
            VALUES
            ($1, $2, $3, $4)
    `

    pool.query(query, [email, gender, hash, role], (err, response) => {
        if(err) next(err)

        res.status(201).json({
            message: "User Registered"
        })
    })
})

router.use(authentication)
router.use('/', moviesRouter)
router.use('/', userRouter)

module.exports = router
