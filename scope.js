/*There are three types of scoping in JS 
1.Block Scope
2.Function Scope
3.Global Scope*/

/*1.Block Scope
It means code access only in braces
example:{}
 TABLE:
                   var    let    const
Inside of block     ✔     ✔       ✔      
Outside of block    ✔     ❌      ❌
*/

//Inside of Block in var

{
    var x = 10;
    var y = 20;
    console.log(x)
    console.log(y)
}

//Inside of Block in let

{
    let a = 10;
    let b = 20;
    console.log(a)
    console.log(b)
}

//Inside of Block in const

{
    const d = 10;
    const e = 20;
    console.log(d)
    console.log(e)
} 

//Outside of Block in var

{
    var x = 10;
    var y = 20;

}    
    console.log(x)
    console.log(y)

//Outside of Block in let

{
    var num1 = 10;
    var num2 = 20;

}    
    console.log(num1)
    console.log(num2)

//Outside of Block in const

{
    var p  = 10;
    var q = 20;

}    
    console.log(p)
    console.log(q)



/*Function Scope
                         var      let     const
Inside of Function        ✔        ✔       ✔
Outside of Function       ❌       ❌      ❌
*/

//Inside of Function in var

function s1() {
    var a1 = 129;
    var b1 = 230;
    console.log(a1,b1)
}
s1()

//Inside of Function in let

function s2() {
    let a2 = 129;
    let b2 = 230;
    console.log(a2,b2)
}
s2()

//Inside of Function in const

function s3() {
    const a3 = 129;
    const b3 = 230;
    console.log(a3,b3)
}
s3()

//Outside of Function in var

/*function s4() {
    var a4 = 129;
    var b4 = 230;
}
console.log(a4,b4)
s4()*/

//Outside of Function in let

/*function s5() {
    let a5 = 129;
    let b5 = 230;
}
console.log(a5,b5)
s5()*/

//Outside of Function in let

/*function s6() {
    const a6 = 129;
    const b6 = 230;
}
console.log(a6,b6)
s6()*/

// Global Scope

var x1=10;
let y1=20;
const z1=30;

console.log(x1,y1,z1)

{
    console.log(x1,y1,z1)
}

function sayCheck(){
    console.log(x1,y1,z1)
}
sayCheck()