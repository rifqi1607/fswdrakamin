const express = require('express')
const app = express()
const router = require('./route.js')

app.use(router)

// pool.connect((err, res) => {
//     if (err){
//         console.log("Gagal terhubung ke database")
//     } else {
//         console.log("Berhasil terhubung ke database")
//     }
// })

app.listen(3002)