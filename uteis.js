function exemplofilter() {
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let numerosfiltrados = numeros.filter((numero) => numero > 2);
  console.log(numerosfiltrados);
}

function exemplofilter2() {
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50, -7, 38, -17];
  let numerosFiltrado = numeros.filter((numero) => numero > 5);
  console.log("numeros filtrado: " + numerosFiltrado);
}

function exercicio1array() {
  let numeros = [10, 22, 14, 15, 5, 4, 7, 12, -12, -22, 44];
  let numeroslistados = numeros.filter((numero) => numero > 10);
  console.log("resultado exercicio 1:" + numeroslistados);
}

function exercicio2array() {
  let nomes = [
    "Anderson",
    "Carlos",
    "Pedro",
    "Eduardo",
    "Allan",
    "Jose",
    "Flavio",
  ];
  let nomeslistados = nomes.filter((nome) => nome.startsWith("A"));
  console.log("resultado exercicio 2:" + nomeslistados);
}

function exercicio3array() {
  let produtos = [
    { nome: "Action figure", preco: 40 },
    { nome: "Mouse pad", preco: 33 },
    { nome: "Mouse", preco: 120 },
    { nome: "Monitor", preco: 700 },
  ];

  let produtosempromocao = produtos.filter((produto) => produto.preco < 100);
  console.log("Produtos em promoçao:" + produtosempromocao);
}

function exemplofind() {
  let produtos = [
    { id: 1, nome: "teclado", preco: 100 },
    { id: 2, nome: "Mouse", preco: 50 },
    { id: 3, nome: "Monitor", preco: 700 },
  ];
  let produtofiltrado = produtos.find((produto) => produto.preco == 700);
  console.log(produtofiltrado);
}

function findexe01() {
  let nomes = ["Andre", "Antonio", "Alex", "Allan", "Amaro"];
  let nomeslistados = nomes.find((nome) => nome === "Allan");
  console.log(nomeslistados);
}

function findexe02(){

    let listanomes = [
        {id:1, nome: "Donfowl"},
        {id:2, nome: "Clubes"},
        {id:3, nome: "Don"},
        {id:4, nome: "Fowl"},
    ];
    let nomebusca = listanomes = listanomes.find(nome=>nome.id==2)
    console.log(listanomes)
}


function exemplomap(){
let numeros = [1,2,3,4,5];
let numerosdobrados = numeros.map(numero=>numero*2)
console.log(numerosdobrados);

}

function mapexe1(){
let palavras =["Ufa", "e", "sexta", "feira"]
let destaque = palavras.map(palavra=>palavra+"!!!")
console.log(destaque)

}

function mapexe2(){

    
}