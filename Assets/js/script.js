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