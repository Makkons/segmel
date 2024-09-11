import { burger } from '../functions/burger.js';
import { getHeaderHeight } from '../functions/header-height.js';
import { getScrollBarWidth } from '../functions/scrollBar-width.js';
import { throttle } from '../functions/throttle.js';

const header = document.querySelector('.header')
const hero = document.querySelector('.hero')

if (hero) {
    header.classList.add('header--dark');
} else {
    header.classList.remove('header--dark');
}

const headerDarkTheme = header.classList.contains('header--dark');

getScrollBarWidth();
getHeaderHeight();
toggleClassOnScroll(header, 'header--dark', 20);

let throttleGetHeaderHeight = throttle(() => {
    getHeaderHeight()
});
let throttleToggleClassOnScroll = throttle(() => {
    toggleClassOnScroll(header, 'header--dark', 20);
});

window.addEventListener('resize', throttleGetHeaderHeight);
window.addEventListener('scroll', throttleToggleClassOnScroll);

function toggleClassOnScroll(element, className, heightOffset) {
    if (window.scrollY > heightOffset && headerDarkTheme) {
        element.classList.remove(className);
    } else if (headerDarkTheme) {
        element.classList.add(className);
    }
}