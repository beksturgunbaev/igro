$(document).ready(function() {
    // Slider:
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

   // Input mask:
   $('.phone_mask').inputmask("phone", {
        placeholder: '#',
        showMaskOnHover: false,
    });
        
        Inputmask.extendAliases({
        my_phone: {
            alias: "+7(###)###-##-##",
            phoneCodes: [{
            mask: "+7(###)###-##-##",
            }],
        }
    });
    $('.phone_mask').inputmask("my_phone");
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

// Accordion:
const acc = document.getElementsByClassName("catalog_link");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        let icon = this.querySelector('svg');
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            icon.classList.remove('active');

        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            icon.classList.add('active');
        }
    });
}

// Dropdown
let dropdown = document.querySelectorAll('.dropp_down');

for(let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('active');
    });
}