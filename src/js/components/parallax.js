import Rellax from 'rellax';

const rellaxSelectors = document.querySelectorAll('.rellax');

if (rellaxSelectors.length > 0) {
    const rellax = new Rellax('.rellax', {
        center: true,
    })
}