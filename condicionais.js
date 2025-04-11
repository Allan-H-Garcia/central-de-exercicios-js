function exercicioCondicionais1() {
  // maior ou menor de idade

  let numero = prompt("digite sua idade");
  if (numero <= 17) {
    alert("Menor de idade");
  } else {
    if (numero >= 18) alert("Maior de idade");
  }
  gerarlog("Exercicio de maior idade executado as: " + new Date().toLocaleDateString())
}



function exercicioCondicionais2() {
  // numero postivo ou negativo

  let numero = prompt("digite um numero");
  if (numero > 0) {
    alert("numero postivo");
  } else {
    alert("numero negativo");
  }
  gerarlog("Exercicio positivo ou negativo executado as: " + new Date().toLocaleDateString())
}

function exercicioCondicionais3() {
  let numero = prompt("nota de avaliacao");

  if (numero >= 60) {
    alert("Voce foi aprovado");
  } else {
    alert("voce foi reprovado");
  }
  gerarlog("Exercicio note de aprovação executado as: " + new Date().toLocaleDateString())
}

function exercicioCondicionais4() {
  // numero positivo ou negativo ou zero

  let numero = prompt("digite um numero");

  if (numero > 0) {
    alert("Positivo.");
  } else {
    if (numero < 0) {
      alert("Negativo.");
    } else {
      alert("É zero.");
    }
  }
  gerarlog("Exercicio Positivo ou negativo as: " + new Date().toLocaleDateString())
}

function exercicioCondicionais5() {
  // faixa etaria
  let numero = prompt("digite sua idade");
  if (numero <= 12) {
    alert("crianca");
  } else { if (numero > 13 && numero <= 17) {
    alert("adolescente");
  }
}
if (numero > 18) {
  alert("adulto");
}
gerarlog("Exercicio Faixa etaria as: " + new Date().toLocaleDateString())
}


function exercicioCondicionais6() {
  // numero par ou impar

  let numero = prompt("digite numero");

  if (numero % 2 === 0) {
    alert("Par.");
  } else {
    alert("impar.");
  }
  gerarlog("Exercicio par ou impar executado as: " + new Date().toLocaleDateString())
}


function exercicio1inter() {


  let numero1 = Number(prompt("digite numero"))
  let numero2 = Number(prompt("digite outro valor"))
  let operacao = prompt("digite a operacao")
  let resultado

  if (operacao === "+") {
    resultado = numero1 + numero2
  } else if (operacao === "-") {
    resultado = numero1 - numero2
  } else if (operacao === "*") {
    resultado = numero1 * numero2
  } else if (operacao === "/") {
    resultado = numero1 / numero2
  }
  alert(" O resultado é: " + resultado)
}


function exercicio2inter() {

  let numero1 = prompt("digite valor 1")
  let numero2 = prompt("digite valor 2")
  let numero3 = prompt("digite valor 3")

  if (numero1 > numero2 && numero1 > numero3) {
    alert("Primeiro valor maior")
  } else {
    if (numero2 > numero1 && numero2 > numero3)
      alert("Segundo valor maior")
  } if (numero3 > numero1 && numero3 > numero2) {
    alert("Terceiro valor maior")
  }
}


function exercicio3inter() {

  let valor = prompt("Digite o valor da sua compra e veja seu desconto")
  let desconto
  if (valor > 100) {
    desconto = 0
  } else if (valor < 100) {
    desconto = valor * 0.9
  }

  alert("Seu desconto é:" + desconto)
}


function gerarlog(textoDoLog) {
  let logscontainer = document.querySelector(".logscontainer")
  let paragraph = document.createElement("p");
  paragraph.innerHTML = textoDoLog;
  logscontainer.appendChild(paragraph)

}