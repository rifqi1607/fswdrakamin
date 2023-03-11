const express = require('express')
const router = express.Router()
const MovieRouter = require('./movieRouter.js')

router.use(MovieRouter);        

module.exports = router