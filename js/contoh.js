const layanan = ["SKA", "CAK", "PDA", "TNM"];
function formatTanggal(dateStr) {
  const bulan = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];
  const d = new Date(dateStr);
  return d.getDate() + " " + bulan[d.getMonth()] + " " + d.getFullYear();
}

function validasiForm() { 
    const nama = document.getElementById('nama').value; 
    const nim = document.getElementById('nim').value; 
    const prodi = document.getElementById('prodi').value; 
    const layanan = document.getElementById('layanan').value; 
    const tanggal = document.getElementById('tanggal').value; 
    // Berlanjut ke validasi...  

      // Cek field kosong 
    if (nama === '' || nim === '' || prodi === '' || layanan === '' || 
tanggal === '') { 
        alert('❌ Semua field wajib diisi!'); 
        return false; / Mencegah submit halaman! / 
    } 

     // Cek NIM harus 8 digit angka 
    if (nim.length !== 8 || isNaN(nim)) { 
        alert('❌ NIM harus terdiri dari 8 digit angka murni!'); 
        return false; 
    } 

    alert('✅ Pengajuan berhasil!\n\n' + 
        'Nama: ' + nama + '\n' + 
        'NIM: ' + nim + '\n' + 
        'Prodi: ' + prodi + '\n' + 
        'Layanan: ' + layanan + '\n' + 
        'Tanggal: ' + formatTanggal(tanggal)); 
 
    return true; / Yes, form sah dikirim / 

     console.log("Data Pengajuan:", { 
        nama: nama, 
        nim: nim, 
        prodi: prodi, 
        layanan: layanan, 
        tanggal: formatTanggal(tanggal) 
    }); 
 
    // Mengembalikan false agar form tidak disubmit dan halaman tidak ter-refresh//
    return false; 
} 