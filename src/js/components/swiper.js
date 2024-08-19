import Swiper from 'swiper';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';

Swiper.use([Navigation, Pagination, Autoplay]);

const heroSwiper = new Swiper('.hero__swiper', {
    slidesPerView: 2.5,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        401: {
            slidesPerView: 3,
        },
        961: {
            slidesPerView: 5,
        }
    }
});
const projectsSwiper = new Swiper('.projects__swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
const clientsSwiper = new Swiper('.clients__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 2,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        800: {
            slidesPerView: 2,
        }
    }
});