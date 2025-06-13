/*
-Functions are one of the most powerful features in JS .
-They allow to reuse the code,organize logic,and handle dynamic inputs
-Functions are used always like
   declaration + call
*/
   
//-Syntax
  //For function declaration

function sayHello(){
    console.log("Hello")
}

//For function call
sayHello()

//the function will declare only when we call the function without calling function the declaration is of no use

/*console.log(a)
let a=12; */

//let us take one example

sayHello()

function sayHello(){
    console.log("Hello")
}

//Functions with Parameters

function sum() {
    console.log(10+6)
}
sum()

//if user have to give the values then the code will be

function sum(num1,num2) {
    console.log(num1+num2)
}
sum(2,4) 

function sum(num1,num2,num3) {
    console.log(num1+num2+num3)
}
sum(2,4,13)

function sub() {
    console.log(10-6)
}
sub()

function mul() {
    console.log(10*6)
}
mul()

function div() {
    console.log(10/6)
}
div()

function sub(num1,num2) {
    console.log(num1-num2)
}
sub(2,4) 

function mul(num1,num2) {
    console.log(num1*num2)
}
mul(2,4) 

function div(num1,num2) {
    console.log(num1/num2)
}
div(2,4) 


// 13/06/2025

/*let fname = "Prathima"
let age = 19
function sayName(){
    console.log("My name is " + fname + " and age is " + age)
}
sayName()*/


//we can use other string methods too for ex:

let fname = "Prathima"
let age = 19
function sayName(){
    console.log("My name is " + fname + " and age is " + age) //Double Quotation
    console.log('My name is ' + fname + ' and age is ' + age)//Single Quotation
    console.log(`My name is ${fname} and age is ${age}`)//Template literal(Introduced in es6 after 2015)
}
sayName()


