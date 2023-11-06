const form = document.querySelector('#form');
form.addEventListener('submit', function (e) {
 e.preventDefault();
 const inputWeight = e.target.querySelector('#weight');
 const inputHeight = e.target.querySelector('#height');
 const weight = Number(inputWeight.value);
 const height = Number(inputHeight.value);
});
