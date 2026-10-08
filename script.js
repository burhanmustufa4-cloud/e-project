$(document).ready(function() {
    let currentSlide = 0;
    const slides = $('.carousel-slide');
    const dots = $('.dot');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.removeClass('active');
        dots.removeClass('active');
        
        slides.eq(index).addClass('active');
        dots.eq(index).addClass('active');
        currentSlide = index;
    }

    $('.next-btn').click(function() {
        let next = (currentSlide + 1) % totalSlides;
        showSlide(next);
    });

    $('.prev-btn').click(function() {
        let prev = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(prev);
    });

    dots.click(function() {
        let slideIndex = $(this).data('slide');
        showSlide(slideIndex);
    });

    setInterval(function() {
        let next = (currentSlide + 1) % totalSlides;
        showSlide(next);
    }, 9000);
});