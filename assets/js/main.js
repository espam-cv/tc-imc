const form = document.querySelector('#form');
form.addEventListener('submit', function (e) {
 e.preventDefault();
 const inputWeight = e.target.querySelector('#weight');
 const inputHeight = e.target.querySelector('#height');
 const weight = Number(inputWeight.value);
 const height = Number(inputHeight.value);
});

function getLevelImc(imc) {
  const level = ['Bajo peso', 'Peso normal', 'Sobrepeso',
    'Obesidad grado 1', 'Obesidad grado 2', 'Obesidad grado 3'];
  if (imc >= 39.9) return level[5];
  if (imc >= 34.9) return level[4];
  if (imc >= 29.9) return level[3];
  if (imc >= 24.9) return level[2];
  if (imc >= 18.5) return level[1];
  if (imc < 18.5) return level[0];
 }
 function getImc(weight, height) {
  const imc = weight / height ** 2;
  return imc.toFixed(2);
}

function createP() {
  const párrafo = document.createElement('p');
  return párrafo;
 }

 function ObtenerResultado(msg, isValid) {
  const result = document.querySelector('#result');
  result.innerHTML = '';
  const párrafo = createP();
  if (isValid) {
    párrafo.classList.add('paragraph-result');
  } else {
    párrafo.classList.add('bad');
  }
  párrafo.innerHTML = msg;
  result.appendChild(párrafo);
 }
