function generateTriangle(event) {
  event.preventDefault(); // agar tidak refresh saat submit

  // jangan dihapus atau diubah
  let tinggi = parseInt(document.getElementById("tinggiSegitiga").value);
  let karakter = document.getElementById("karakter").value;

  if (Number.isInteger(tinggi) && tinggi > 0) { // Perbaiki operator || menjadi &&
    let segitiga = "";
    for (let i = 1; i <= tinggi; i++) { // Perbaiki i-- menjadi i++
      for (let j = tinggi - i; j > 0; j--) { // Perbaiki j >= i menjadi j > 0
        segitiga += "&nbsp;&nbsp;";
      }
      for (let k = 1; k <= 2 * i - 1; k++) { // Perbaiki k-- menjadi k++
        segitiga += karakter;
      }
      segitiga += "<br>";
    }
    
    // jangan dihapus atau diubah
    document.getElementById("triangleResult").innerHTML = segitiga;
  } else {
    document.getElementById("triangleResult").innerHTML = "Tinggi segitiga harus berupa bilangan bulat positif.";
  }
}
