/*
var= permite que o valor seja atualizado em qualquer momento do código.
let= permite que o valor altere somente quando está fora de um bloco de código.
const+ não permite que o valor seja alterado.


let nome = "Ana"; // tudo o que é um texto (string) tem que ser colocado entre aspas para ser reconhecido
let idade = 17;   // número não precisa ter aspas

console.log(nome);
console.log(idade);

{                             //tudo o que está entre {chaves} é um bloco de código
    let nome = "Lara";
let idade = 16;

console.log(nome);
console.log(idade);
}

console.log(nome);

let curso = "";
console.log(curso);
*/

function cadastrar(){
    let nome = document.getElementById("nome").value;  //value atribui valor do id.
//para a variável

 let idade = document.getElementById("idade").value;

 let curso = document.getElementById("curso").value;

 if(nome == "" || idade == "" || curso == "") {
    alert("Cadastro inválido");
 }
 else{
    alert("Cadastro realizado com sucesso!");
    document.getElementById("resultado").innerHTML =
"Nome do(a) aluno(a) é " + nome + 
"<br> Idade: " + idade + " anos." +
"<br> Curso: " + curso;

document.querySelector(".descricao").textContent = "Informações do Aluno";

//display=none serve para ocultar um elemento HTML

document.getElementById ("nome").style.display = "none";
document.getElementById ("idade").style.display = "none";
document.getElementById ("curso").style.display = "none";
document.getElementById ("cadastrar").style.display = "none";

document.getElementById ("resultado").style.display = "block";
document.getElementById ("novoAluno").style.display = "block";

//display=block exibir um elemento HTML, em forma de bloco
}

}

function novoAluno(){
document.getElementById ("nome").style.display = "block";
document.getElementById ("idade").style.display = "block";
document.getElementById ("curso").style.display = "block";
document.getElementById ("cadastrar").style.display = "block";

document.getElementById ("resultado").style.display = "none";
document.getElementById ("novoAluno").style.display = "none";

document.querySelector(".descricao").textContent =
"Preencha os dados abaixo";

document.getElementById("nome").value = "";
document.getElementById("idade").value = "";
document.getElementById("curso").value = "";
}
/* 
|| = ou
alert > é usado para dar um aviso para o usuário em uma caixa no navegador.

(=) > significa atribuição.
(==) > compara entre dois elementos/valores.

+ concatenar (juntar informações).

if (se) = caso aconteça a condição.
else (se não) = caso a condição.

br = break roll-"pula" linha

*/






