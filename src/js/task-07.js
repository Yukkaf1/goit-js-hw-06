const imputEl = document.querySelector('input[id="font-size-control"]');

imputEl.addEventListener('input', controlFontImput);


function controlFontImput (event) {
    console.log(event)
    console.log(imputEl.style.fontSize)
}