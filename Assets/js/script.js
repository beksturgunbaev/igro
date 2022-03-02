$(document).ready(function() {
    $('.slider_wrapper').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        driggable: true,
        nextArrow: ".right-arrow",
        prevArrow: ".left-arrow",
        responsive: [
            {
            breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
            breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });
});

// Mobile menu:
let burgerBtn = document.querySelector('.burger_menu'),
    closeBtn = document.querySelector('.close_btn'),
    modal = document.querySelector('.modal'),
    mobileMenu = document.querySelector('.mobile_menu'),
    bodyScroll = document.querySelector('body');

burgerBtn.onclick = function() {
    modal.classList.add('active');
    mobileMenu.classList.add('active');
    bodyScroll.classList.add('no_scroll');
}
closeBtn.onclick = function() {
    modal.classList.remove('active');
    mobileMenu.classList.remove('active');
    bodyScroll.classList.remove('no_scroll');
}
