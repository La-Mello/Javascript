/**
 * @async
 * Also non-blocking code
 * Code doesn't have to wait for previous code to be executed 
 */

console.log("Start");

setTimeout(()=>{
    console.log("Exec after three seconds");
},3000)//timeout set to execute after three seconds

console.log("End");
//all the outer code is executed first the after three seconds the code in the setTimeout is executed