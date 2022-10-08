"use strict"; //restringe o acesso somente a variaveis declaradas 

/*Aula 1 de JS (Fundamentos de Desenvolvimento Web)*/

//comando para mostras na tela

console.log("Hello, world!");
console.log('Hello, world!');
console.log(`Hello, world!`);       

//Declaracão de variaveis

var a , b, c;
a=13;
b=23;
c=a+b;
console.log("O resultado da soma é: "+ c);

//visibilidade de variaveis 
//var ----- escopo global
//let ----- escopo de bloco
//const --- escopo de bloco

var x=10, y=20;
const resposta= "s";


// Exemplo de escopo de bloco:

if(x=10){
    let y;
    y=0;
    y+=1;    
    console.log("y (dentro do if): "+ y);
}

console.log("x: "+ x);
console.log("y (fora do if): "+ y);

let nome="João", idade=18, eAluno=true;
// mostra o tipo do dado typeof
console.log("nome: "+ nome, "-",typeof nome);
console.log("idade: "+ idade, "-",typeof idade);
console.log("é aluno?: "+ eAluno, "-",typeof eAluno);

//console.log("Media: "+ media);
//Usando place holder
//console.log(`Media do curso ${nome} é ${media.toFixed(1)}`);
/* 
operadores:
+ -- mais
- -- menos 
* -- multiplicaçao 
/ -- divisao
** -- elevado 5 ** 2 ou 5 elevado a 2
% 

operadores logicos e relacionais:
> -- maior
< -- menor 
>= -- maior igual
<= -- menor igual
!= -- diferente
== -- comaparaçao
=== -- operador de igualdade extrita
*/

console.log(typeof(nome+p1));
console.log(0/0);

console.log(3!=3);
console.log(3>=7);
console.log(3>10 || 10>5);
console.log(!(3>=7));
console.log(5=="5");
console.log(5==="5");

/* if (condiçao){
    instrucoes_se_V
}
*/

/*
var p1=3.5,p2=6;
var media = (p1 + 2*p2)/3;

if(media >= 5){
    console.log("Aprovado");
}else{
    console.log("reprovado");
}
*/

var p1=5,p2=8;
var media = (p1 + 2*p2)/3;

if(media >= 9){
    console.log("A");
}else if(media >= 7){
    console.log("B");
}else if(media >= 5){
    console.log("C");
}else if(media >= 2){
    console.log("D");
}else{
    console.log("E");
}





