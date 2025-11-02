//Diff between let and var

//--------Global scope---------
let a=10;
var b=20;
const c=30;

console.log(a);
console.log(b);
console.log(c);


//--------local scope (Functional Scope)---------
function greet(){
    let m=10;
    let d=20;
    let e=30;
}
//console.log(d);     //Error

if(true){
    let m=10;
    var n=20;
    let o=30;
}

console.log(n);     //Difference: Do not follow block scope

var amt=400;
var amt=20; 
console.log(amt);   //Difference: Can be redeclared

