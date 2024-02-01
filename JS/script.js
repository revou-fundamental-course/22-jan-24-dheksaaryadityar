document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form untuk melakukan submit default

    // Ambil nilai dari input dan select
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var interest = document.getElementById('interest').value;

    // Kirim data ke backend atau lakukan apa pun yang diperlukan di sini
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Interest: " + interest);

    // Anda dapat menambahkan logika lain di sini, seperti pengiriman ke server, dll.
});

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slideshow-container");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Tambahkan ini untuk mengganti gambar secara otomatis
var slideInterval = setInterval(showSlides, 2000);

// Fungsi untuk menghentikan slideshow saat mouse hover
function pauseSlideshow() {
    clearInterval(slideInterval);
}

// Fungsi untuk melanjutkan slideshow saat mouse leave
function resumeSlideshow() {
    slideInterval = setInterval(showSlides, 2000);
}




