//Masukan Tanggal, Bulan, dan Tahun dalam angka!!
var tanggal=06;
var bulan=3;
var tahun=2019;
var tgl,bln,thn;

switch(bulan){
    case 1:
        if(tanggal>0 && tanggal<32){
            tgl=tanggal;
        }else{
            tgl='\'Hanya ada tanggal 1-31\'';
        }
        bln='Januari';
        if(tahun>1989 && tahun<2201){
            thn=tahun;
        }else{
            thn='\'Tolong masukan tahun antara 1990-2200\'';
        }
        break;
    case 2:
        if(tahun%4==0){
            if(tanggal>0 && tanggal<30){
                tgl=tanggal;
            }else{
                tgl='\'Ini Tahun Kabisat! Hanya ada tanggal 1-29\'';
            }
        }else{
            if(tanggal>0 && tanggal<29){
                tgl=tanggal;
            }else{
                tgl='\'Ini Bukan Tahun Kabisat! Hanya ada tanggal 1-28\'';
            }
        }
        bln='Februari';
        if(tahun>1989 && tahun<2201){
            thn=tahun;
        }else{
            thn='\'Tolong masukan tahun antara 1990-2200\'';
        }
        break;
    case 3:
        if(tanggal>0 && tanggal<32){
            tgl=tanggal;
        }else{
            tgl='\'Hanya ada tanggal 1-31\'';
        }
        bln='Maret';
        if(tahun>1989 && tahun<2201){
            thn=tahun;
        }else{
            thn='\'Tolong masukan tahun antara 1990-2200\'';
        }
        break;
    case 4:
        if(tanggal>0 && tanggal<31){
            tgl=tanggal;
        }else{
            tgl='\'Hanya ada tanggal 1-30\'';
        }
        bln='April';
        if(tahun>1989 && tahun<2201){
            thn=tahun;
        }else{
            thn='\'Tolong masukan tahun antara 1990-2200\'';
        }
        break;
    case 5:
        if(tanggal>0 && tanggal<32){
            tgl=tanggal;
        }else{
            tgl='\'Hanya ada tanggal 1-31\'';
        }
        bln='Mei';
        if(tahun>1989 && tahun<2201){
            thn=tahun;
        }else{
            thn='\'Tolong masukan tahun antara 1990-2200\'';
        }
        break;
    case 6:
        if(tanggal>0 && tanggal<31){
            tgl=tanggal;
        }else{
            tgl='\'Hanya ada tanggal 1-30\'';
        }
        bln='Juni';
        if(tahun>1989 && tahun<2201){
            thn=tahun;
        }else{
            thn='\'Tolong masukan tahun antara 1990-2200\'';
        }
        break;
    case 7:
        if(tanggal>0 && tanggal<32){
            tgl=tanggal;
        }else{
            tgl='\'Hanya ada tanggal 1-31\'';
        }
        bln='Juli';
        if(tahun>1989 && tahun<2201){
            thn=tahun;
        }else{
            thn='\'Tolong masukan tahun antara 1990-2200\'';
        }
        break;
    case 8:
        if(tanggal>0 && tanggal<32){
            tgl=tanggal;
        }else{
            tgl='\'Hanya ada tanggal 1-31\'';
        }
        bln='Agustus';
        if(tahun>1989 && tahun<2201){
            thn=tahun;
        }else{
            thn='\'Tolong masukan tahun antara 1990-2200\'';
        }
        break;
    case 9:
        if(tanggal>0 && tanggal<31){
            tgl=tanggal;
        }else{
            tgl='\'Hanya ada tanggal 1-30\'';
        }
        bln='September';
        if(tahun>1989 && tahun<2201){
            thn=tahun;
        }else{
            thn='\'Tolong masukan tahun antara 1990-2200\'';
        }
        break;
    case 10:
        if(tanggal>0 && tanggal<32){
            tgl=tanggal;
        }else{
            tgl='\'Hanya ada tanggal 1-31\'';
        }
        bln='Oktober';
        if(tahun>1989 && tahun<2201){
            thn=tahun;
        }else{
            thn='\'Tolong masukan tahun antara 1990-2200\'';
        }
        break;
    case 11:
        if(tanggal>0 && tanggal<31){
            tgl=tanggal;
        }else{
            tgl='\'Hanya ada tanggal 1-30\'';
        }
        bln='November';
        if(tahun>1989 && tahun<2201){
            thn=tahun;
        }else{
            thn='\'Tolong masukan tahun antara 1990-2200\'';
        }
        break;
    case 12:
        if(tanggal>0 && tanggal<32){
            tgl=tanggal;
        }else{
            tgl='\'Hanya ada tanggal 1-31\'';
        }
        bln='Desember';
        if(tahun>1989 && tahun<2201){
            thn=tahun;
        }else{
            thn='\'Tolong masukan tahun antara 1990-2200\'';
        }
        break;
    default:
        if(tanggal>0 && tanggal<32){
            tgl=tanggal;
        }else{
            tgl='\'Hanya ada tanggal 1-31\'';
        }
        bln='\'Tidak ada Bulan ke-13!\'';
        if(tahun>1989 && tahun<2201){
            thn=tahun;
        }else{
            thn='\'Tolong masukan tahun antara 1990-2200\'';
        }
        break;
}
console.log('Kamu Memasukan Tanggal: '+tgl+' '+bln+' '+thn);