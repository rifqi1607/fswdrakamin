const express = require('express')
const app = express()
const port = 3003
const router = require('./routes/index.js')
const errorHandler = require('./middlewares/errorhandler.js')


app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})