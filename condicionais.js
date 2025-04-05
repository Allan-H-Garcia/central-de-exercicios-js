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

let numero1 = prompt("digite numero")
let numero2 = prompt("digite outro valor")
let product = numero1 * numero2
alert(product);

}

function exercicio2inter(){

    let numero1 = prompt("digite valor 1")
    let numero2 = prompt("digite valor 2")
    let numero3 = prompt("digite valor 3") 
    l


}
