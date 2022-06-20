/**
 * @conditions
 * return either true or false depending on  a condition
 * If
 * If..else
 * If..else If...else
 * 
 */

const x=20;

if(x==20){
    //code blocks will be executed if the condition evaluates to true
    console.log("x = 20");
}

//  If..else

if(x>20){
    //executed if condition evaluates to true
    console.log("x > 20");
}else{
    //executed if condition evaluates to false
    console.log("x < 20");
}

// If..else If...else or nested if statements
//look at the code on operators first
if(x>0 && x<10){

    console.log("0<x<10");

}else if(x>10 && x<20){
   
    console.log("10<x<20"); 
}else{
    console.log("20<x");
}