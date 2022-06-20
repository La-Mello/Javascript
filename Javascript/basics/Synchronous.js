/**
 * @sync
 * Also blocking code
 * Code have to wait for previous code to be executed first
 */

console.log("Start");

let x=0;
console.log(x);
while(x<100000000){
    x++;
    //delays execution of other code
}
console.log(x);
//code is executed after while loop finished
//waits for while loop to finish
console.log("Out of loop");

console.log("Top level code");