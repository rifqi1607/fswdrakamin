class PersegiPanjang {
    constructor(panjang,lebar){
        this.panjang = panjang
        this.lebar = lebar
    }
    
    luas() {
        return this.panjang * this.lebar
    }
        
    keliling() {
        return (2 * this.panjang) + (2 * this.lebar)
    }
}

class Persegi {
    constructor(sisi){
        this.sisi = sisi
    }
    
    luas() {
        return this.sisi**2
    }
        
    keliling() {
        return 4 * this.sisi
    }
}

module.exports = {PersegiPanjang, Persegi}