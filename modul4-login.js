function validateForm() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("telepon").value;

    // Validasi nama
    if (nama === "") {
        alert("Nama tidak boleh kosong!");
        return false;
    }

    // Validasi email (regex sederhana)
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Email tidak valid!");
        return false;
    } else if (telepon === "") {
        alert("Nomor telepon tidak boleh kosong!");
        return false;
    }


    alert("Profil berhasil disimpan!");
    return true; // Jika validasi berhasil, form akan dikirim






}