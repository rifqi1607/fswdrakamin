const MoviesServices = require('../repositories/movieRepository.js')

class MovieServices {

    static getMovies = async (next) => {

        try {
            
            // const data = "masuk dari service"
            const data = await MoviesServices.getMovies(next)
            return data;

        } catch(err) {
            next(err)
        }
        
    }

    static getMoviesById = async (id, next) => {

        try {
            
            const data = await MoviesServices.getMoviesById(id, next)
            return data;

        } catch(err) {
            next(err)
        }
        
    }

    static addMovies = async (columns, next) => {

        try {
            
            const data = await MoviesServices.addMovies(columns, next)
            return data;

        } catch(err) {
            next(err)
        }
        
    }

    static updateMovies = async (columns, next) => {

        try {
            
            

        } catch(err) {
            next(err)
        }
        
    }
    
}

module.exports = MovieServices