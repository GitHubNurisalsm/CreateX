const swiper = new Swiper('.say__swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
var swiper2 = new Swiper(".team__swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".team__next",
        prevEl: ".team__prev",
    },
    autoplay: {
        delay: 2000
    },
    loop: true,
    breakpoints: {
        992: {
            slidesPerView: 4,
        },
        886: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        676: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 2,
        },
        425: {
            slidesPerView: 1,
        },
        375: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
    }
});
let burger = document.querySelector('.header__burger')
let burgerMenu = document.querySelector('.header__burgerMenu')

burger.addEventListener('click',() => {
    burger.classList.toggle('active')
    burgerMenu.classList.toggle('active')
})