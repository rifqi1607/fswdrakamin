const express = require('express')
const router = express.Router()
const MovieController = require('../controllers/movieController.js')

router.get('/movies', MovieController.getMovies);
router.get('/movies/:id', MovieController.getMoviesById);
router.post('/movies', MovieController.addMovies)
router.put('/movies/:id', MovieController.updateMovie)


module.exports = router