const formulario = document.getElementById('formulario1');

function validaFormulario(var1, var2) {
  return var2 > var1;
}

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  let campoA = document.getElementById('campoA');
  let campoB = document.getElementById('campoB');

  let valorA = Number(campoA.value);
  let valorB = Number(campoB.value);

  const mensagemAlerta = 'Alerta!: Valor <b>A<b> não pode ser >= <b>B<b> ';
  const mensagemSucesso = 'Sucesso!: Valor <b>B<b> é maior que <b>A<b> ';

  let resultado = validaFormulario(valorA, valorB);

  if (resultado) {
    const sucesso = document.querySelector('.sucesso');
    sucesso.innerHTML = mensagemSucesso;
    sucesso.style.display = 'block';
    console.log(`O valor de A é: ${valorA}`);
    console.log(`O valor de B é: ${valorB}`);
    document.querySelector('.alerta').style.display = 'none';
    campoA.value = '';
    campoB.value = '';
  }
  else {
    const alerta = document.querySelector('.alerta');
    alerta.innerHTML = mensagemAlerta;
    alerta.style.display = 'block';
    console.log(`O valor de A é: ${valorA}`);
    console.log(`O valor de B é: ${valorB}`);
    document.querySelector('.sucesso').style.display = 'none';
  }
});
