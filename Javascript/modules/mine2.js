function sayHi() {
    console.log("Hi from mine 2");
}

const name="brian"

let callMe=(name)=>{
    console.log(`Heeey ${name}`);
}

//exporting as an object
//only exports objects in the module.expports
module.exports={
    sayHi,
    name,
    callMe
}