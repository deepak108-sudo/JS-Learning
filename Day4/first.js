//comparison operator
//number to number

let a1=2;
let a2=1;

console.log(a1==a2);
console.log(a1>a2);
console.log(a1<a2);
console.log(a1<=a2);
console.log(a1>=a2);

let num=10;
let str="10";
console.log(num==str);  //Type conversion string to num

let num1=20;
let str1="30x";
console.log(num1<str1);

//===type check, then compare the value
console.log(num===str);

let x=10;
let y=10;
console.log(x===y);

//Rule: null is equal to undefined only
//null === undefined (No) because of type checking
console.log(null==undefined);

console.log(null===undefined);

//null can only be equivalent to undefined
console.log(null==0);   //Rule: predefined that null is only equal to undefined (no type conversion)
console.log(null<0);    //in all type conversion
console.log(null>0);
console.log(null<=0);
console.log(null>=0);

//undefined comparisson
console.log(undefined==0);  //Rule only equal to null
console.log(undefined<0);   //NaN < 0 (false)
console.log(undefined>0);   //NaN < 0 (false)
console.log(undefined<=0);  //NaN < 0 (false)
console.log(undefined>=0);  //NaN < 0 (false)

//NaN
console.log(NaN==NaN);
let str3="Deepak";
let str4="Suraj";

console.log(Number(str3)==Number(str4));

let abc1=123;
let abc2="123";
let abc3=123;

console.log(abc1==abc2==abc3);  //true == abc3 (false)

//Logical operator
let age=18;
let money=420;
console.log(age>=18 && money>200);

console.log(age>10 || money>500);

console.log(!(age>10));

//Bitwise operator
//100 101 = 100 => 4 & 5= 4
console.log(4&5);
console.log(11&14);
console.log(4|5);
console.log(4^5);

//shift operator
console.log(5<<2);
console.log(5>>2);
console.log(20>>3);