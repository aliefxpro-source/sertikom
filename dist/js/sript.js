 const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const position = window.scrollY > 0;
    navbar.classList.toggle("scrolling-active", position);
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.2 });

const allContainers = document.querySelectorAll('.container');
allContainers.forEach(container => observer.observe(container));
 
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

   


