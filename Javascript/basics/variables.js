/**
 * @Variables
 * Javascript is a dynamically typed language
 * No-type is used during declaration of variables
 * Js automaticaly recognises and assigns a type during runtime
 */

let x=10;//assigned to number
console.log(x,typeof(x));

var y=10.34;//assigned to number
console.log(y,typeof(y));

let name="Brian";//assigned to string
console.log(name,typeof(name));

let init='B';//assigned to string
console.log(init,typeof(init));

let isdead=true;//assigned to boolean
console.log(isdead,typeof(isdead));


const z=30.23645342;//assigned to number
/**const variables are variables that cannot be changed once they are assigned 
 * An attempt to change a const generates an 'TypeError: Assignment to constant variable.'
*/
//z=20;
console.log(z,typeof(z));

//variables can be reassigned to new types
x="Brian";
console.log(x,typeof(x));

