const express = require('express')
const app = express()
const port = 3002
const router = require('./routes/index.js')
const errorHandler = require('./middlewares/errorhandler.js')
const swagger = require('swagger-ui-express')
const moviesJson = require('./movies.json')
const morgan = require('morgan')

app.use('/api-docs', swagger.serve, swagger.setup(moviesJson));
app.use(morgan('common'))
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})