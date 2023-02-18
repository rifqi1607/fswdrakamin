const fs = require('fs')

const dataLog = fs.readFileSync("./homework.log", "utf-8")
console.log(dataLog)

fs.writeFileSync("./log.txt", dataLog, "utf-8")
console.log("Berhasil Menulis Log ke dalam file log.txt")    

