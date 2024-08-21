import Accordion from 'accordion-js';

const acSelectors = document.querySelectorAll('.accordion');

if (acSelectors.length > 0) {
    const accordion = new Accordion('.accordion', {
        duration: 400,
        showMultiple: false,
        elementClass: 'accordion__item',
        triggerClass: 'accordion__trigger',
        panelClass: 'accordion__panel',
    });

    accordion.open(1)
}



