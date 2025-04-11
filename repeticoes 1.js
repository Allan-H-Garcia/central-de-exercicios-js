function exemplofor() {
  //FOR
  // 1 declarar contador
  // 2 condição
  // 3 incremento
  for (let contador = 1; contador <= 5; contador++) {
    alert(contador);
  }
}

function exemplowhile() {
  let contador = 1;

  while (contador <= 5) {
    console.log(contador);
    contador++;
  }
}

function exemploDowhile() {
  let contador = 1;
  do {
    alert(contador);
    contador++;
  } while (contador <= 5);
}

function exercicio1() {
  for (let contador = 1; contador <= 10; contador++) {
    alert(contador);
  }
}

function exercicio2() {
  let valor = prompt("digite um numero");

  for (let contador = 1; contador <= 10; contador++) {
    alert(contador * valor);
  }
}

function exercicio3() {
  debugger;
  let valor = prompt("Digite o valor a ser somado");
  let soma = 0;
  for (let contador = 1; contador <= valor; contador++) {
    soma = soma + contador;
  }
  alert(soma);
}

function exercicio4() {
  let valor = prompt("digite o valor");
  for (let contador = 2; contador <= 50; contador += 2) {
    alert(contador);
  }
}

function exercicio5() {
  let valor = prompt("escolha um numero");
  while (valor >= 0) {
    alert(valor);
    valor--;
  }
}

function exercicio6() {
  debugger;
  let numeroaleatorio = Math.floor(Math.random() * (100 - 0) + 0);
  let valor;
  while (valor != numeroaleatorio) {
    valor = prompt("adivinhe o numero entre 0 e 100");
    if (valor < numeroaleatorio) {
      alert("numero menor que o valor digitado");
    } else if (valor > numeroaleatorio) {
      alert("numero maior que o valor digitado");
    } else  {
      alert("ACERTOU!");
    }
  }
}


