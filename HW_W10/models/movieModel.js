const pool = require('../config.js')

class MovieModels {

    static getMovies = async (next) => {

        const query = `
            SELECT 
                * 
            FROM movies 
            order by 1;
        `
        try {

            const data = await pool.query(query)
            return data.rows

        } catch(err) {
            next(err);
        }

    }

    static getMoviesById = async (id, next) => {

        const query = `
            SELECT 
            *
            FROM movies
            WHERE id = $1
        `
        try {
            
            const data = await pool.query(query, [id])
            return data.rows[0]
            
        } catch(err) {
            next(err);
        }

    }

    static addMovies = async (columns, next) => {
        
        //console.log(columns)
        const {title, genres, year} = columns
        const query = `
            INSERT INTO movies (title, genres, year)
            VALUES
            ($1, $2, $3)
        `
        try {
            
            const data = await pool.query(query, [title, genres, year])
            return data
        } catch(err) {
            next(err);
        }

    }

}

module.exports = MovieModels