/**
 * String concatenation
 * String templates
 * String methods
 */

const fName="Brian"
const lName="Kidiga"

//logging
console.log(fName,lName);

//concatination
const fullName=fName+lName;

console.log(fullName);

// using string templates
console.log(`${fName} + ${lName} = ${fullName}`);

/**String methods */

//concat method
console.log(fName.concat(lName));

//charAt returns a character at the specified index
console.log(fName.charAt(2));

//returns true if the string ends with the specified string or false otherwise
console.log(lName.endsWith("iga",lName.length));

//return the length of the string
console.log(fName.length);

//printing each character of a string on its own
//using for..in loop
for (let c in fName) {
   // console.log(fName[c]);
}

//using for loop

for(let i=0;i<lName.length;i++){
        //console.log(lName[i]);
        console.log(lName.charAt(i));//works same way
}