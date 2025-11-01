//-----Function-----
function greet(){
    console.log('Hello Guys');
    console.log('What are you doing');
    console.log('What\'s your work');
}

greet();
greet();

function sum(number1, number2){
    console.log(number1+number2);
}

function multiply(number1,number2){
    return number1*number2;
}

sum(8,12);
sum(65,34);
console.log(multiply(8,9));

const multi=function(){
    console.log("I am fine");

}

multi();

//----Arrow Function
let mutli = () => console.log("Hello arrow");
console.log(multi());

let add = (num1,num2)=>{
    return num1+num2;
} 

let addition= (n1,n2) => n1+n2;
let cube = n => n*n*n;  //single paramenter no bracket

console.log(cube(25));

console.log(add(7,8));
console.log(addition(78,50));

//More parameter
const allsum=function(...number){
    console.log(number);
}

allsum(2,3,6,5,4);

let obj={
    name:"Deepak",
    age:22,
    amount:45000
}

function fun({name,amount:amt}){
    console.log(name,amt);
}

fun(obj);


//-----Pass of value-----
let swap=(a,b) =>{
    temp=a;
    a=b;
    b=temp;
    console.log(a,b);
}

a=5;
b=6;
console.log(a,b);
swap(a,b);
console.log(a,b);