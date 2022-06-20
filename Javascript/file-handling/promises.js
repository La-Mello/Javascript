const { rejects } = require('assert');
const fs=require('fs');
const { resolve } = require('path');

const read=()=>{

    return new Promise((resolve,reject)=>{
        fs.readFile('./in.txt',(err,data)=>{
            if(!err){
                resolve(data.toString());
            }
            reject();
        })
    })
    
}

read().then(data=>{
    fs.writeFile('./out.txt',data,(err)=>{
        if(err)
        console.log("Error");
    });
}).catch((err)=>{
    console.log(err);
})