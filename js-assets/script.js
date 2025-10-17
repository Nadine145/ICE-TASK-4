// Accordion functionality
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Lightbox functionality for multiple modals
var slideIndex = [1, 1, 1]; // One for each country

function openModal(modalNum) {
    document.getElementById("myModal" + modalNum).style.display = "block";
}

function closeModal(modalNum) {
    document.getElementById("myModal" + modalNum).style.display = "none";
}

function plusSlides(n, modalNum) {
    showSlides(slideIndex[modalNum - 1] += n, modalNum);
}

function currentSlide(n, modalNum) {
    showSlides(slideIndex[modalNum - 1] = n, modalNum);
}

function showSlides(n, modalNum) {
    var i;
    var slides = document.getElementsByClassName("mySlides" + modalNum);
    var dots = document.getElementsByClassName("demo" + modalNum);
    var captionText = document.getElementById("caption" + modalNum);
    
    if (n > slides.length) {
        slideIndex[modalNum - 1] = 1;
    }
    if (n < 1) {
        slideIndex[modalNum - 1] = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex[modalNum - 1] - 1].style.display = "block";
    dots[slideIndex[modalNum - 1] - 1].className += " active";
    captionText.innerHTML = dots[slideIndex[modalNum - 1] - 1].alt;
}