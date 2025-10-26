let arr=[20,30,40];
console.log(arr);

//different data type
let nums=[10,20,50,"deepak kumar"];
console.log(nums);

console.log(typeof arr);

//object
let obj={
    user_name: "Deepak",
    account_number:4985698745,
    balance: 2000000
}

console.log(obj);

let instagram={
    username:"tourist",
    password:"123456789"
}

console.log(instagram);
console.log(typeof instagram);

//function
let fun=function(){
    console.log("Hello deepak kumar");
}

fun();

console.log(typeof fun);

//Type conversion
let account_balance="10000";
let num=Number(account_balance);

console.log(typeof account_balance);
console.log(typeof num);

console.log(account_balance);
console.log(num);

//boolean type conversioin
let x=false;
let bNum=Number(x);

console.log(typeof x);
console.log(bNum);

//When not a no.
let y="100xs";
let yNum=Number(y);

console.log(yNum);

//null
let z=null;
console.log(z);

let zNum=Number(z);
console.log(zNum);

//undefined
let x2;
console.log(x2);

console.log(Number(x2));

//--------String conversion-----------
let ab=20;
let abString=String(ab);

console.log(abString);
console.log(typeof abString);

//Boolean conversion
let abc="str";
let abx=" ";
let aby="";

console.log(Boolean(abc));
console.log(Boolean(abx));
console.log(Boolean(aby));

//---------------Operators---
console.log(9+6-8*8/9+5-2);

//Modulus
console.log(20%3);


//Preincrement
let sum=20;
console.log(sum++);
console.log(sum);

//Assignment operator
let xi=20;

xi+=10;
console.log(xi);