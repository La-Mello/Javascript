/**
 * @Operators
 * Assignment
 * Relational
 * Logical
 */

//assignment   (=)
//assign the variable on the right to the name on the left
let x=20;
let myName="Javascript"
console.log(x,myName);

//relational operators
// mostly used when condition checking is required
// return either true or false
//used when comparing objects or variables
//start reading from left for simplicity
let y=20;
//== works same as ===
//=== strictly compares the values
console.log(x===y);//read as 'is equal to'
console.log(x!==y);//read as 'is not equal to'
console.log(x>y);//read as 'is greater to'
console.log(x<y);//read as 'is less than to'
console.log(x>=y);//read as 'is greater than or equal to'
console.log(x<=y);//read as 'is less than or equal to'


//logical
// used for logical operations

// not(!) negates or falsifies given data
let loggedIn=true;
console.log(!loggedIn);

// Or (||) checks two conditions and returns true if either of them evaluates to true and false otherwise
let z=22;
console.log(z>10 || z<20);

// And (&&) checks two conditions and returns true if both of them evaluates to true and false otherwise
console.log(x>0 && x<30);


