//non-blocking mode

const fs=require('fs');

console.log("started");
fs.readFile('./in.txt',(err,data)=>{

    //returns data in buffer form  <Buffer 48 65 6c 6c 6f 20 69 20 61 6d 20 54 68 65 20 69 6e 70 75 74 20 74 65 78 74>

    if(!err){
        console.log("File reading finished");
        console.log(data.toString());//converting recieved data to string type
    }else{
        console.log("an error occured");
    }
})

console.log("reading file");

