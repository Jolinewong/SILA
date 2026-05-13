const LAYANAN = ['SKA' , 'CAK' , 'TNM' , 'PDA'];

function formatTanggal(dateStr){
    const bulan = ['Jan' , 'Feb' , 'Mar' , 'Apr' , 'Mei' , 'Jun' , 'Jul' , 'Agu' , 'Sep' , 'Okt' , 'Nov' , 'Des'];
    const d = new Date(dateStr);
    return d.getDate() + ' ' + bulan[d.getMonth()] + ' ' + d.getFullYear();
}

function validasiForm(){
    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const prodi = document.getElementById('prodi').value;
    const layanan = document.getElementById('coba1').value;
    const tanggal = document.getElementById('tanggal').value;
}

if (nama ==='' || nim === '' || prodi ==='' || coba1 ==='' || tanggal ===''){
    alert('❌ Semua field wajib diisi!');
    return false;
}

if (nim.length !==8 || isNaN(nim)){
    alert('❌ NIm Harus terdiri dari 8 digit angka murni!');
    return false;
}

alert('🫸 Pengajuan Berhasil! \n\n' +
    'nama: ' + nama + '\n' +
    'NIM: ' + nim + '\n' +
    'Prodi: ' + prodi + '\n' +
    'Layanan: ' + coba1 + '\n' +
    'Tanggal: ' + formatTanggal(tanggal)
);

return true;

console.log("Data Pengajuan:" ,{
    nama: nama,
    nim: nim,
    prodi: prodi,
    layanan: coba1,
    tanggal: formatTanggal(tanggal)
});

return false;