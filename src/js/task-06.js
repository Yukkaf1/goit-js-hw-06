const imputEl = document.querySelector('input[id="validation-input"]');
const symbol = Number(imputEl.dataset.length)


imputEl.addEventListener('blur', countSymbolImput);

function countSymbolImput (event) {
   (event.currentTarget.value.length === symbol)
   ? imputEl.classList.add('valid')
   : imputEl.classList.add('invalid')
    };