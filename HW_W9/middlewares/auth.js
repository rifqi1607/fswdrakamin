const { response } = require('express')
const jwt = require('jsonwebtoken')
const secretToken = "INIKODERAHASIA"
const pool = require('../config.js')

function authentication(req, res, next) {
    const {token} = req.headers

    if(token) {
        try {
            const decoded = jwt.verify(token, secretToken)
            const {id, email, role} = decoded
            const checkUser = `
                SELECT 
                    *
                FROM users
                WHERE email = $1
            `

            pool.query(checkUser, [email], (err, response) => {
                if(err) next(err)

                if(response.rows.length === 0) {
                    next({name : "UserNotFound"})
                } else {
                    const user = response.rows[0]

                    req.activeUser = {
                        id : user.id,
                        email : user.email,
                        role : user.role
                    }
                    next()
                }
            })
        } catch(err) {
            next({name : "InvalidToken"})
        }
    } else {
        next({name : "Unauthenticated"})
    }
}

function authorization(req, res, next) {
    const {id, email, role} = req.activeUser

    if(role === "admin") {
        next()
    } else {
        next({name : "Unauthorized"})
    }
}

module.exports = {
    authentication,
    authorization
}