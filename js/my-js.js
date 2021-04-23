/**js for date */
harinya = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
bulannya = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agusuts","September","Oktober","November","Desember"];

var today = new Date();

var hari = today.getDay();
var tanggal = today.getDate();
var bulan = today.getMonth();
var tahun = today.getFullYear();

document.getElementById("tanggalan").innerHTML= harinya[hari]+', '+tanggal+' '+bulannya[bulan]+' '+tahun;

/**end js for date */

/**js for time */
function tampilJam(){
    mytime=setTimeout('operasiJam()',1000)
}

function operasiJam() {
    var jam = new Date().getHours();
    var menit = new Date().getMinutes();
    var detik = new Date().getSeconds();

    document.getElementById('jam').innerHTML =jam;
    document.getElementById('menit').innerHTML =menit;
    document.getElementById('detik').innerHTML =detik;
    tampilJam();
}
/**end js for time */

/**operasi aritmatika */
function tambah(){
    var angka1=parseFloat(document.getElementById('angka1').value);
    var angka2=parseFloat(document.getElementById('angka2').value);
    var hasilTambah = angka1 + angka2;
    document.getElementById('operasi').innerHTML='+';
    document.getElementById('hasil').innerHTML=hasilTambah;
}
function kurang(){
    var angka1=parseFloat(document.getElementById('angka1').value);
    var angka2=parseFloat(document.getElementById('angka2').value);
    var hasilKurang = angka1 - angka2;
    document.getElementById('operasi').innerHTML='-';
    document.getElementById('hasil').innerHTML=hasilKurang;
}
function kali(){
    var angka1=parseFloat(document.getElementById('angka1').value);
    var angka2=parseFloat(document.getElementById('angka2').value);
    var hasilKali = angka1 * angka2;
    document.getElementById('operasi').innerHTML='x';
    document.getElementById('hasil').innerHTML=hasilKali;
}
function bagi(){
    var angka1=parseFloat(document.getElementById('angka1').value);
    var angka2=parseFloat(document.getElementById('angka2').value);
    var hasilBagi = angka1 / angka2;
    document.getElementById('operasi').innerHTML='/';
    document.getElementById('hasil').innerHTML=hasilBagi;
}