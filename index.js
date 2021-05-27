const headerBurger = document.querySelector('.burger');
const mobileMenu = document.querySelector('nav');

headerBurger.addEventListener('click', function () {
    mobileMenu.classList.toggle("show")
})

document.addEventListener('DOMContentLoaded', function () {
    new Splide('.first-slider', {
        type: 'loop',
        pagination: false,
        perPage: 5,
        arrows: {
            height: '88px',
            width: '44px',
        },
        breakpoints: {
            1200: {
                perPage: 3,
            },
            768: {
                perPage: 1,
            }
        },
    }).mount();
    new Splide('.second-slider', {
        type: 'loop',
        pagination: false,
        perPage: 5,
        arrows: {
            height: '88px',
            width: '44px',
        },
        breakpoints: {
            1200: {
                perPage: 3,
            },
            768: {
                perPage: 1,
            }
        },
    }).mount();
});
