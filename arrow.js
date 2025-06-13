
//* Arrow Functions:

/*function sayBye(){
    console.log("Bye")
}
sayBye()*/

/* How to convert simple to arrow function
1.Remove Function key word and add let
2.Add = sign after Function name
3.Add => sign after () 
let's apply to above prog*/

let sayBye = () => {
    console.log("Bye")
}
sayBye()

let fname = "Prathima"
let age = 19
let name = () => {
    console.log(`My name is ${fname} and my age is ${age}`)
}
name()

sayHi()
let sayHi = () =>{
    console.log("Hello")
}
//Simple Functions support Hosting
//Arrow functions doesnt support
//hosting means you can initialize after calling also