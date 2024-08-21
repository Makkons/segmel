import SmoothScroll from 'smooth-scroll';
const smoothScroll = new SmoothScroll('a[href*="#"]', {
        speed: 300,
        header: '.header',
    }
);

document.addEventListener('DOMContentLoaded', function() {

    scrollOnHash();

    function scrollOnHash() {
        if (!window.location.hash) {
            return
        }
        const anchorSelector = document.querySelector(window.location.hash);

        if (anchorSelector) {
            smoothScroll.animateScroll(anchorSelector);
        }
    }
});