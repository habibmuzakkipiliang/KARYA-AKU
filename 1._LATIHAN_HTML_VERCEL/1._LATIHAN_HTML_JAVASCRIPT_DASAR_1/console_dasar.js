// Hello World

console.log ("\n Bikin Hello World JavaScript dasar \n")

console.log ("Hello World")


console.log ("\n --- Batas ---\n")



console.log ("\n Variabel dasar \n")

var tes_a = "Halo Para Smurf"
var sapa = "Halo member JKT48"
var tes_b = "Halo Wota JKT48"

console.log ("Tes a =", tes_a)
console.log ("Sapa =", sapa)
console.log ("Tes b =", tes_b)



console.log ("\n --- Batas --- \n")



console.log ("\n Tipe data pemrograman \n")

var teks = "Halo Teks"
var angka = 12
var desimal = 3.14
var cek = true
var kosong = null

detail = `
- Teks    : ${teks}
- Angka   : ${angka}
- Desimal : ${desimal}
- Cek     : ${cek}
- Kosong  : ${kosong}
`

console.log (detail)


console.log ("\n --- Batas --- \n")



console.log ("\n Bikin Fungsi dalam Kalkulator Sederhana \n")

function tambah (a, b) {
     return a + b
}

function kurang (x, y) {
     return x - y
}

function kali (e, r) {
     return e * r
}

function bagi (l, p) {
     return l / p
}

function pangkat (r, t) {
     return r ** t
}


var hasil_1 = tambah (10, 10)
var hasil_2 = kurang (10, 5)
var hasil_3 = kali (5, 2)
var hasil_4 = bagi (10, 5)
var hasil_5 = pangkat (10, 3)


console.log ("Tambah =", hasil_1)
console.log ("Kurang =", hasil_2)
console.log ("Kali =", hasil_3)
console.log ("Bagi =", hasil_4)
console.log ("Pangkat =", hasil_5)


console.log ("\n --- Batas --- \n")



console.log ("\n Bikin fungsi dengan percabangan dasar \n")

function op (a) {

     if (a >= 5) {
          console.log (`Angka a besar, angka a = ${a}`)
     }

     else {
          console.log (`Angka a kecil, angka a = ${a}`)
     }
}

op (10)
op (7)
op (5)
op (4)
op (3)