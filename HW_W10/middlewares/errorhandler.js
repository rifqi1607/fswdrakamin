function errorHandler(err, req, res, next) {
    if(err.name === "NotFound"){
        res.status(404).json({
            message : "Data Not Found"
        })
    } else if(err.name === "UserNotFound"){
        res.status(404).json({
            message : "User Not Found"
        })
    } else if(err.name === "WrongPassword"){
        res.status(400).json({
            message : "Wrong Email or Password"
        })
    } else if(err.name === "Unauthenticated"){
        res.status(400).json({
            message : "Token not Provided"
        })
    } else if(err.name === "InvalidToken"){
        res.status(400).json({
            message : "Token is Invalid"
        })
    } else if(err.name === "Unauthorized"){
        res.status(401).json({
            message : "Unauthorized Access"
        })
    } else {
        res.status(500).json({
            message : "Internal Server Error"
        })
    }

    console.log(err)
}

module.exports = errorHandler