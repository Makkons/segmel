import JustValidate from 'just-validate';
import VMasker from 'vanilla-masker';

export const validateForms = (selector, rules, checkboxes = [], afterSend) => {
  const form = document?.querySelector(selector);
  const telSelector = form?.querySelector('input[type="tel"]');
  const urlAction = form?.getAttribute('action');

  if (!form || !rules) {
    return false;
  }

  if (telSelector) {

    let telMask = ['+9 (999) 999-99-99', '+9 (999) 999-99-99'];
    VMasker(telSelector).maskPattern(telMask[0]);
    telSelector.addEventListener('input', inputHandler.bind(undefined, telMask, 11), false);

    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: 'function',
          validator: function() {
            const phone = telSelector.value.replace(/\D/g, '');
            return phone.length === 11;
          },
          errorMessage: item.telError
        });
      }
    }

    function inputHandler(masks, max, event) {
      let c = event.target;
      let v = c.value.replace(/\D/g, '');

      let vArr = v.split('');
      if (vArr[0] !== '7') {
        vArr[0] = '7';
        v = vArr.join('');
      }

      let m = c.value.length > max ? 1 : 0;
      VMasker(c).unMask();
      VMasker(c).maskPattern(masks[m]);
      c.value = VMasker.toPattern(v, masks[m]);
    }
  }

  const validation = new JustValidate(selector);

  for (let item of rules) {
    validation
      .addField(item.ruleSelector, item.rules);
  }

  if (checkboxes.length) {
    for (let item of checkboxes) {
      validation
        .addRequiredGroup(
          `${item.selector}`,
          `${item.errorMessage}`
        )
    }
  }

  validation.onSuccess((ev) => {
    let formData = new FormData(ev.target);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (afterSend) {
            ev.target.reset();
            afterSend();
          }
          // console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', urlAction, true);
    xhr.send(formData);
  })

};
