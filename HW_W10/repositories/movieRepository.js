const Movies = require('../models/movieModel.js')

class MovieRepository {

    static getMovies = async (next) => {

        try {
            
            //const data = "masuk dari repo"
            const data = await Movies.getMovies(next)
            return data

        } catch(err) {
            next(err)
        }
        
    }

    static getMoviesById = async (id, next) => {

        try {
            
            const data = await Movies.getMoviesById(id, next)
            return data

        } catch(err) {
            next(err)
        }
        
    }

    static addMovies = async (columns, next) => {

        try {
            
            const data = await Movies.addMovies(columns, next)
            return data

        } catch(err) {
            next(err)
        }
        
    }

}

module.exports = MovieRepository