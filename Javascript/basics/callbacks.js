//functions will be called after all the other code finishes executing and after function body is executed
console.log("Start");


/**
 * will always be called after every 3 seconds
 * ctrl + c to quit
 */
setInterval(()=>{
        console.log("Called after 3 seconds");
},3000)

setTimeout(()=>{//to be called after 5seconds
    console.log("Timeout function");
},5000)

console.log("End");


