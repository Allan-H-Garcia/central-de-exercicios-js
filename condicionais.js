function exercicio1() {
  // maior ou menor de idade

  let numero = prompt("digite sua idade");
  if (numero <= 17) {
    console.log("Menor de idade");
  } else {
    if (numero >= 18) console.log("Maior de idade");
  }
}


function exercicio2() {
  // numero postivo ou negativo

  let numero = prompt("digite um numero");
  if (numero > 0) {
    alert("numero postivo");
  } else {
    alert("numero negativo");
  }
}

function exercicio3() {
  let numero = prompt("nota de avaliacao");

  if (numero >= 60) {
    alert("Voce foi aprovado");
  } else {
    alert("voce foi reprovado");
  }
}

function exercicio4() {
  // numero positivo ou negativo ou zero

  let numero = prompt("digite um numero");

  if (numero > 0) {
    console.log("Positivo.");
  } else {
    if (numero < 0) {
      console.log("Negativo.");
    } else {
      console.log("É zero.");
    }
  }
}

function exercicio5() {
  // faixa etaria
  let numero = prompt("digite sua idade");
  if (numero <= 12) {
    alert("crianca");
  } else {
    if (numero > 13 && numero <= 17) {
    alert("adolescente");
  }
   }
  if (numero > 18) {
    alert("adulto");
  }
}


function exercicio6() {
  // numero par ou impar

  let numero = prompt("digite numero");

  if (numero % 2 === 0) {
    console.log("Par.");
  } else {
    console.log("impar.");
  }
}


function exercicio1inter(){
debugger

let numero1 = Number (prompt("digite numero"))
let numero2 = Number (prompt("digite outro valor"))
let operacao = prompt ("digite a operacao")
let resultado

if (operacao === "+" ){
  resultado= numero1 + numero2
} else if ( operacao === "-"){
  resultado = numero1 - numero2
}else if ( operacao === "*"){
  resultado = numero1 * numero2
} else if ( operacao === "/"){
  resultado = numero1 / numero2
}
alert (" O resultado é: "+ resultado)  
}


function exercicio2inter(){

    let numero1 = prompt("digite valor 1")
    let numero2 = prompt("digite valor 2")
    let numero3 = prompt("digite valor 3") 
    
    if ( numero1>numero2 && numero1>numero3) {
      alert("Primeiro valor maior")
    } else {
      if ( numero2 > numero1 && numero2>numero3)
        alert ("Segundo valor maior")
    } if (numero3>numero1 && numero3>numero2){
      alert ("Terceiro valor maior")
    }
}


function exercicio3inter () {
 
let valor = prompt("Digite o valor da sua compra e veja seu desconto")
let desconto
if (valor > 100){
  desconto = 0
} else if ( valor <100){
  desconto = valor - 10%
}

alert ("Seu desconto é:" + desconto)
}
exercicio3inter ()