/**
 * 
 */

//named function
//no parameters no return value
function sayHi(){
    console.log("hello world");
}
sayHi();

//has parameters return value
function add(x,y) {
    return Number(x+y);
}

console.log(add(2,3));

//no parameters return value
function myFun() {
    return "NO parameters but has return value";
}

console.log(myFun());

//default parameters
// can be supplied with limited parameters
function defAdd(m=0,n=0) {
    return m+n;
}

console.log(defAdd(2,3));
console.log(defAdd(2));


//arrow functions
// names function / variable function
let helloWorld=()=>{
    console.log("hello");
}

helloWorld();

// anonymous function
// can only be invoked once
(()=>{
    console.log("anonymous function");
})();

// anonymous function with parameters
((name)=>{
    console.log(`Hello,  ${name}`);
})("brian");

// anonymous function with return value
const val=(()=>{return 2;})();

console.log(val);