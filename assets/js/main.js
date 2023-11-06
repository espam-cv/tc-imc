const form = document.querySelector('#form');
form.addEventListener('submit', function (e) {
 e.preventDefault();
 const inputWeight = e.target.querySelector('#weight');
 const inputHeight = e.target.querySelector('#height');
 const peso = Number(inputWeight.value);
 const altura = Number(inputHeight.value);
});
