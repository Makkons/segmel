import Swiper from 'swiper';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';

Swiper.use([Navigation, Pagination, Autoplay]);

const heroSwiper = new Swiper('.hero__swiper', {
    slidesPerView: '5',
    spaceBetween: '0',
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});