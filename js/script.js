document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll('.slides .slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1; 
        }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 2000);
    }
});

function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let country = document.getElementById('country').value;

    if (name.trim() === '' || email.trim() === '' || country === '') {
        alert('Nama, email, dan negara harus diisi.');
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Format email tidak valid.');
        return false;
    }

    return true;
}

document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        let href = link.getAttribute('href');

        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    });
});