function subtracao(numero1, numero2) {
  let resultado = 0;
  resultado = numero1 - numero2;
  console.log(resultado);
}

subtracao(15, 48);

function soma(numero1, numero2) {
  let resultado = 0;
  resultado = numero1 + numero2;
  console.log(resultado);
}

soma(3, 5);

function multiplicacao(numero1, numero2) {
  let resultado = 0;
  resultado = numero1 * numero2;
  console.log(resultado);
}

multiplicacao(10, 8);

function divisao(numero1, numero2) {
  let resultado = 0;
  if (numero1 > 0 && numero2 > 0) {
    resultado = numero1 / numero2;
    console.log(resultado);
  }
}

divisao(1, 2);

function tabuada(multiplicador) {
  const meuArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (resultado of meuArray) {
    console.log(resultado * multiplicador);
  }
}

tabuada(9);
