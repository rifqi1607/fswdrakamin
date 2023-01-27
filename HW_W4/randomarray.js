// HOMEWORD WEEK 4 FSWD RAKAMIN
// Nama     : Muhammad Abdul Rifqi
// Email    : muhammadabdulrifqi@gmail.com

// Lets Start...!!!
// ===================================================================================================

// Inisialisasi Variable
const arrayLength = 100
const randomArray = []
const indexGanjil = []
const indexGenap = []

// Fungsi generate random array berjumlah 100
function generateRandom(start, end){
    for (let i = 0; i < arrayLength; i++) {
        let randomNumber =  Math.floor(Math.random() * end) + start;
        randomArray.push(randomNumber)
      }
    return randomArray
}

// Fungsi untuk memisahkan value dengan index ganjil dan genap dari random array yang sudah digenerate 
function splitIndex(array){
    for (key in array){
        if (key % 2 == 1) {indexGanjil.push(array[key])}
        if (key % 2 == 0) {indexGenap.push(array[key])}
    }
    const splited = {"ganjil" : indexGanjil, "genap": indexGenap}
    return splited
}

// Fungsi untuk mendapatkan nilai minimum dan maksimum dari array
function getMaxMin(array){
    let max = array[0], min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) { max = array[i]; }
        if (array[i] < min) { min = array[i]; }
    }
    const valMaxMin = {"maxValue" : max, "minValue": min}
    return valMaxMin
}

//Fungsi untuk mendapatkan nilai total dari array
function getTotal(array){
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total
}

//Fungsi untuk mendapatkan nilai rata-rata dari array
function getAvg(array){
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    const avg = total / array.length
    return avg
}

//Fungsi untuk membuat perbandingan nilai min, max, total, dan rata-rata
function getCompareValue(arrGanjil,arrGenap){
    let result
    if (arrGanjil > arrGenap){
        result = "Array ganjil lebih besar"
    }
    else if (arrGanjil < arrGenap){
        result = "Array Genap Lebih besar"
    }
    else {
        result = "Kedua nilai sama"
    }
    return result
}

// Memanggil fungsi generate random array
console.log(generateRandom(1,50))

// Memanggil Fungsi memisahkan index array
const splitArr = splitIndex(randomArray)
console.log(splitArr["ganjil"])
console.log(splitArr["genap"])

// memanggil fungsi untuk mendapatkan nilai max,min,total, dan rata2 dari array index ganjil
const valMaxMinGanjil = getMaxMin(splitArr["ganjil"])
const totalIdxGanjil = getTotal(splitArr["ganjil"])
const avgIdxGanjil = getAvg(splitArr["ganjil"])
console.log("Nilai maksimum dari index array ganjil adalah : "+valMaxMinGanjil["maxValue"])
console.log("Nilai minimum dari index array ganjil adalah : "+valMaxMinGanjil["minValue"])
console.log("Nilai total dari index array ganjil adalah : "+totalIdxGanjil)
console.log("Nilai rata-rata dari index array ganjil adalah : "+avgIdxGanjil)

// memanggil fungsi untuk mendapatkan nilai max,min,total, dan rata2 dari array index genap
const valMaxMinGenap = getMaxMin(splitArr["genap"])
const totalIdxGenap = getTotal(splitArr["genap"])
const avgIdxGenap = getAvg(splitArr["genap"])
console.log("Nilai maksimum dari index array genap adalah : "+valMaxMinGenap["maxValue"])
console.log("Nilai minimum dari index array genap adalah : "+valMaxMinGenap["minValue"])
console.log("Nilai total dari index array genap adalah : "+totalIdxGenap)
console.log("Nilai rata-rata dari index array genap adalah : "+avgIdxGenap)

// memanggil fungsi untuk melakukan perbandingan nilai max,min,total, dan rata2
const compareMax = getCompareValue(valMaxMinGanjil["maxValue"], valMaxMinGenap["maxValue"])
const compareMin = getCompareValue(valMaxMinGanjil["minValue"], valMaxMinGenap["minValue"])
const compareTotal = getCompareValue(totalIdxGanjil, totalIdxGenap)
const compareAvg = getCompareValue(avgIdxGanjil, avgIdxGenap)
console.log("Hasil perbandingan nilai maksimum adalah "+compareMax)
console.log("Hasil perbandingan nilai minimum adalah "+compareMin)
console.log("Hasil perbandingan nilai total adalah "+compareTotal)
console.log("Hasil perbandingan nilai rata-rata adalah "+compareAvg)