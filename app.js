const errorHandler = document.querySelector('.error-handler');
const errorP = document.querySelector('.error-p');
const arrowImg = document.querySelector('.arrow');
const myInput = document.querySelector('.myInput');

arrowImg.addEventListener('click', function () {
  if (myInput.value === '') {
    errorHandler.classList.toggle('error-symbol');
    errorP.classList.toggle('error-msg');
  }
});
