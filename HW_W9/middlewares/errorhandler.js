function errorHandler(err, req, res, next) {
    if(err.name === "NotFound"){
        res.status(404).json({
            message : "Data Not Found"
        })
    } else if(err.name === "idNotFound"){
        res.status(404).json({
            message : "ID Not Found"
        })
    } else {
        res.status(500).json({
            message : "Internal Server Error"
        })
    }

    console.log(err)
}

module.exports = errorHandler