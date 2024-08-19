import Inputmask from "../../../node_modules/inputmask/dist/inputmask.es6.js";

const telSelector = document.querySelectorAll('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');

inputMask.mask(telSelector);