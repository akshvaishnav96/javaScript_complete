function outer(){

let msg ='hello i ma from the outer function';

function inner(){
    return msg // This uses the msg variable from the outer scope and the function return it
}

return inner;   // we are returning the function as a return value

}


const closerfunction  = outer();  //we got inner function in return from that function call and store in a variable
console.log(closerfunction()); // we are going to call that inner function and got the result;


