//---------- REVISÃO ----------
//var dia = 20 <-- não é mais utilizada

let nome = "vinicius"
nome = "marina" //<-- tipo string

//console.log(nome)

//const não dá para mudar depois
const rg = 18562537 //<-- tipo number
//rg = 2222222

//console.log(rg)

let dia = true //<-- tipo boolean (true ou false)

let aluno //<-- tipo undefined (não defini oq ele é)

//console.log(aluno)

let noite = null // <-- tipo nulo (é uma caixa que está ali mas não está sendo utilizada ainda)

//console.log(5/"y") //<-- tipo not a number (NaN)

//---------- FIM DA REVISÃO ----------

//---------- OPERADORES DE COMPARAÇÃO ----------
// = atribuição de tipo
// == verificação de valor
// === verifica o tipo e o valor
// != verifica se os valores são diferentes
// !== verifica se os valores são restritamente diferentes
// > maior que
// < menor que
// >= maior ou igual que
// <= menor ou igual que


let number = 2
let numero = "2"

//console.log(number == numero)
//console.log(number === numero) 
//console.log(numero != number)
//console.log(numero !== number)
//console.log(numero >= number)
//console.log(numero <= number)

//if(condição){
//  console.log("retorno")
//}

let idade = 15

if(idade > 18){
    console.log("Você é maior de idade!")
} else if (idade == 15){
    console.log("Está na idade certa")
} else{
    console.log("Você é menor de idade!")
}

let temLuz = false
let sim = "Acenda as luzes"
let nao = "Aguarde a energia voltar"

if(temLuz == true){
    console.log(sim)
} else{
    console.log(nao)
}

let num = prompt("Digite um número:")

console.log(num)

if(num == 5){
    alert("Você acertou!")
} else{
    alert("Você errou :(")
}