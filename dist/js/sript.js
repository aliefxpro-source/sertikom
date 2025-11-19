 document.getElementById("form").addEventListener("submit", function(e) {
      e.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let msg = document.getElementById("message").value.trim();

      if (!name || !email || !msg) {
        alert("Semua field harus diisi!");
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        alert("Email tidak valid!");
        return;
      }

      alert("Pesan berhasil dikirim! Terima kasih telah menghubungi VisiDigital.");
    });