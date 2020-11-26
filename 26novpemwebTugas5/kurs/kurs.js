function setHarga(set) {
    nilai = document.getElementById("nilai").value
    if(set == "dolar_sg"){
        var hasil = nilai * 13.472
    } else if(set == "dolar_US"){
        var hasil = nilai * 9.915
    } else if(set == "euro"){
        var hasil = nilai * 15.888
    } else if(set == "ringgit"){
        var hasil = nilai * 874
    } else if(set == "riyal"){
        var hasil = nilai * 3.592
    } else if(set == "yen"){
        var hasil = nilai * 120
    }
    document.getElementById("hasil").value = hasil
}