const express = require('express')
const router = express.Router()
const moviesRouter = require('./movies.js')
const userRouter = require('./users.js')

router.use('/', moviesRouter)
router.use('/', userRouter)

module.exports = router
