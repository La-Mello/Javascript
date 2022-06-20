/**
 * @loops
 * While(condition=true){do something}
 * do{something}while(condition=true)
 * for
 */

let x=0;

//while loop
console.log("--while loop--");
while(x<=10){

    //prints 0-10
    console.log(x);
    x+=1;
    // x++;//works ssame as x+=1
}
console.log("------------");

//  do while
console.log("--do..While--");

do{
    // prints 10 to 0
    console.log(x);
    x--;

}while(x>=0);

console.log("------------");


console.log("--for loop--");
/**
     * Mostly used to iterate over objects such as arrays and maps 
     * Syntax is for(initialize;condition;action){code to be executed}
     * for example;
     * initialize let x=10;
     * condition x>=0
     * action x++
*/
for(let i=0;i<=10;i++){
    console.log(i);
}
console.log("------------");
