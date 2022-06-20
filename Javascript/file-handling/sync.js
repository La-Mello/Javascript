//blocking mode
const fs=require('fs');

console.log("Started");

console.log("Reading");

const data=fs.readFileSync('./in.txt','utf-8');

console.log("Finished reading");

console.log("Writting");

fs.writeFileSync('./out.txt',data);

console.log("Finished writting");

console.log(data);

