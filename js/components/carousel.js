const btnRight = document.querySelector ('.button-arrow.-right');
const btnLeft = document.querySelector ('.button-arrow.-left');
const elements = document.querySelector('.items-carousel');
let pixels = 30

btnRight.addEventListener('click', function() {
    pixels = pixels + 30;
    elements.style = `transform: translateX(${pixels}px)`
});

btnLeft.addEventListener('click', function() {
    pixels = pixels - 30;
    elements.style = `transform: translateX(${pixels}px)`
});