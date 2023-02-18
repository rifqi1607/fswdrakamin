const modules = require("./module.js")

const meja = new modules.PersegiPanjang(4,2)
console.log("Keliling meja adalah "+meja.keliling()+" cm")
console.log("Luas meja adalah "+meja.luas()+" cm")

const kursi = new modules.Persegi(8)
console.log("Keliling kursi adalah "+kursi.keliling()+" cm")
console.log("Luas kursi adalah "+kursi.luas()+" cm")