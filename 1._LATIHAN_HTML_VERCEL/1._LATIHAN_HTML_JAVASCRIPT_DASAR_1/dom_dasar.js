document.write ("\n <h2> Hello World </h2> \n")

document.write ("<br> --- Batas -- <br>")



document.write ("\n <h2> tipe data pemrograman </h2>\n")

var teks = "Halo Teks"
var angka = 12
var desimal = 3.14
var cek = true
var kosong = null

var detail = `
<br> - Teks    : ${teks}
<br> - Angka   : ${angka}
<br> - Desimal : ${desimal}
<br> - Cek     : ${cek}
<br> - Kosong  : ${kosong}
`

document.write (detail)

document.write ("<br> --- Batas --- <br>")




document.write ("<h2>Bikin Kalkulator sederhana dengan Fungsi</h2>")

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


document.write ("<br> Tambah =", hasil_1)
document.write ("<br> Kurang =", hasil_2)
document.write ("<br> Kali =", hasil_3)
document.write ("<br> Bagi =", hasil_4)
document.write ("<br> Pangkat =", hasil_5)


document.write ("<br>  --- Batas --- <br>")



document.write ("<h2>Percabangan Dasar dengan Fungsi</h2>")

function den (a) {

     if (a >= 5) {
          document.write (`<br> Angka a besar, angka a = ${a}`)
     }

     else {
          document.write (`<br> Angka a kecil, angka a = ${a}`)
     }
}

den (10)
den (9)
den (8)
den (7)
den (5)
den (4)


document.write ("<br>  --- Batas --- <br>")