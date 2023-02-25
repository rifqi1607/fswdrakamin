
const fs = require("fs");
const pool = require("../query.js");

const seedQuery = fs.readFileSync("db/seeding.sql", "utf-8")

pool.query(seedQuery, (err, result) => {
    if(err) throw err

    console.log("Seeding successfully executed")
    pool.end()
})