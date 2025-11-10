//Javascript is Synchronous single threaded
//Synchronous: Top to bottom (one by one syncrnousily)
//single threaded: In one time only one statement 

// console.log(y);
// console.log(x);
// let x=10;
// var y=20;

const meet= ()=> {
    console.log(a+b);
    var a,b;
}
console.log(meet());


//Memory allocation 
//greet: {function code}

greet();
function greet(){
    console.log("Hello meet");
}



//Memory allocation 
//preet:            //same as let
preet();
let preet=()=>console.log("Hello meet");