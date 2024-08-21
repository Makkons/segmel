import { validateForms } from '../functions/validate-forms.js';

import GraphModal from 'graph-modal';
const modal = new GraphModal();

const feedbackChecks = [
    {
        selector: '#feedback__form .checkbox',
        errorMessage: 'Обязательное требование',
    }
];
const footerChecks = [
    {
        selector: '#footer-form .checkbox',
        errorMessage: 'Обязательное требование',
    }
];
const entryChecks = [
    {
        selector: '#entry-form .checkbox',
        errorMessage: 'Обязательное требование',
    }
];

const feedbackRules = [
    {
        ruleSelector: '[name="Имя"]',
        rules: [
            {
                rule: 'minLength',
                value: 3,
                errorMessage: 'Заполните имя!'
            },
            {
                rule: 'required',
                value: true,
                errorMessage: 'Поле должно содержать минимум 3 символа'
            }
        ]
    },
    {
        ruleSelector: '[type="tel"]',
        tel: true,
        telError: 'Введите корректный телефон',
        rules: [
            {
                rule: 'required',
                value: true,
                errorMessage: 'Заполните телефон!'
            }
        ]
    },
];
const footerRules = [
    {
        ruleSelector: '[name="Имя"]',
        rules: [
            {
                rule: 'minLength',
                value: 3,
                errorMessage: 'Заполните имя!'
            },
            {
                rule: 'required',
                value: true,
                errorMessage: 'Поле должно содержать минимум 3 символа'
            }
        ]
    },
    {
        ruleSelector: '[type="tel"]',
        tel: true,
        telError: 'Введите корректный телефон',
        rules: [
            {
                rule: 'required',
                value: true,
                errorMessage: 'Заполните телефон!'
            }
        ]
    },
];
const entryRules = [
    {
        ruleSelector: '[name="Имя"]',
        rules: [
            {
                rule: 'minLength',
                value: 3,
                errorMessage: 'Заполните имя!'
            },
            {
                rule: 'required',
                value: true,
                errorMessage: 'Поле должно содержать минимум 3 символа'
            }
        ]
    },
    {
        ruleSelector: '[type="tel"]',
        tel: true,
        telError: 'Введите корректный телефон',
        rules: [
            {
                rule: 'required',
                value: true,
                errorMessage: 'Заполните телефон!'
            }
        ]
    },
];

const afterForm = () => {

    modal.close('entry-modal');
    modal.open('entry-modal-success');

    setTimeout(() => {
        modal.close('entry-modal-success');
    }, 4000);
};

validateForms('#feedback__form', feedbackRules, feedbackChecks, afterForm);
validateForms('#footer-form', footerRules, footerChecks, afterForm);
validateForms('#entry-form', entryRules, [], afterForm);