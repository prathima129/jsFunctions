/*SetTimeout and SetInterval

1.setTimeout
  It executes a function once after a delayed given time in milliseconds
where 
    1000 => 1 second
    5000 => 5 seconds
*/

function sayGlobal() {
    console.log("Hello Global")
}
/*It takes 2 parameters
1st function
2nd time in milliseconds
It will run only Once
*/
/*setTimeout(sayGlobal,10000)

let seconds=5
setTimeout(sayGlobal,seconds*1000)*/

/* 
2.setInterval
  It executes a function repeatedly at given time in millideconds
   and to stop use ctrl+c
*/

/*function fname(){
console.log("hi")
}*/
setInterval(sayGlobal, 500)
/*It will execute the function multiple times
unless and until we stop it
*/
