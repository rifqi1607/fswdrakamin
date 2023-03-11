const MovieServices = require('../services/movieService.js')

class MovieController {

    static getMovies = async (req, res, next) => {

        try {
            
            const data = await MovieServices.getMovies(next)
            res.status(200).json(data)

        } catch(err) {
            next(err)
        }
        
    } 

    static getMoviesById = async (req, res, next) => {

        try {
            
            const {id} = req.params
            const data = await MovieServices.getMoviesById(id, next)

            if(data) {
                res.status(200).json(data)
            } else {
                next({name: "NotFound"})
            }

        } catch(err) {
            next(err)
        }
        
    }

    static addMovies = async (req, res, next) => {

        try {
            
            const columns = req.body;
            const data = await MovieServices.addMovies(columns, next)
            
            res.status(201).json({
                message: "Data Added Successfully"
            })

        } catch(err) {
            next(err)
        }
        
    }

    static updateMovie = async (req, res, next) => {

        try {
            
            const {id} = req.params 
            const columns = req.body;
            const data = await MovieServices.addMovies(id, columns, next)
            
            if(data) {
                res.status(200).json({
                    message: "Data Updated Successfully"
                })
            } else {
                next({name: "NotFound"})
            }

        } catch(err) {
            next(err)
        }
        
    }

}

module.exports = MovieController