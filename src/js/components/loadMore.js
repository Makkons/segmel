import { isMobile, isTablet, isDesktop } from '../functions/check-viewport.js';

document.addEventListener("DOMContentLoaded", function () {

    const divs = document.querySelectorAll(".blogs__item");
    const elToLoad = document.querySelector('.blogs__button');

    if (divs.length != 0 && divs.length > 6) {

        for (let i = 6; i < divs.length; i++) {
            divs[i].classList.toggle('hidden');
        }

        elToLoad.addEventListener("click", (e) => {

            e.preventDefault();
            const hiddenDivs = document.querySelectorAll(".blogs__item.hidden");
            const items = hiddenDivs.length;
            elToLoad.scrollIntoView({ behavior: 'smooth', block: 'center' });

            if (items != 0 && items > getItemsInRow()) {

                for (let i = 0; i < getItemsInRow(); i++) {
                    hiddenDivs[i].classList.toggle('hidden');
                    hiddenDivs[i].classList.add("animated", "opacityCard");
                }

            } else {

                for (let i = 0; i < items; i++) {
                    hiddenDivs[i].classList.toggle('hidden');
                    hiddenDivs[i].classList.add("animated", "opacityCard");
                }

            }

            if (document.querySelectorAll(".blogs__item.hidden").length == 0) {
                elToLoad.innerText = 'Статей больше нет';
                elToLoad.remove();
            }

        });

        function getItemsInRow() {
            if (isDesktop()) {
                return 3
            }
            if (isTablet()) {
                return 4;
            }
            if (isMobile()) {
                return 2;
            }
        }
    } else if (divs.length != 0) {
        elToLoad.remove();
    }
});