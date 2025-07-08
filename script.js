const nomorWA = "886902106075"

document.getElementById("formPengajuan").addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const jumlah = document.getElementById("jumlah").value;
    const pekerjaan = document.getElementById("pekerjaan").value;
    const alamat = document.getElementById("alamat").value;

    const pesan = `
            Halo, saya ingin mengajukan pinjaman:\n\n 
            Nama: ${nama}\n 
            Jumlah: ${jumlah}\n 
            Pekerjaan saya sebagai: ${pekerjaan}\n 
            Saya tinggal di daerah: ${alamat}`;


    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
});

const ajukan = document.getElementById('ajukan');

ajukan.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Silahkan isi form yang terserdia dan klik ajukan sekarang')

    document.getElementById('form').scrollIntoView({ behavior: "smooth" })
})

document.getElementById('whatsapp-link').href = `https://wa.me/${nomorWA}`