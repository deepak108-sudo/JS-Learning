let str1="Hii my name is deepak kumar"
let str2='Hii sweety'
let str3=`Hii dear`

let price=50;

console.log('Price of tomato is price');    //not displayed
console.log(`Price of the tomato is ${price} get it asap`);

//not modern
console.log("price of the tomato is",price,"get it asap");

//String concatenation
let s1="Hello";
let s2=" Deepak";
console.log(s1+s2);

console.log(s1.length);
console.log(s2.length);

console.log("Hello Deepak Kumar");

//Print "Hello Deepak Kumar"
console.log('"Hello Deepak Kumar"');
console.log("'Hello Deepak Kumar'");
console.log("`Hello Deepak Kumar`");


let message="Deepak is a bad boy. \nHe is an ubermench";
let comment="Deepak is a bad boy. \\n\nHe is an ubermench";
console.log(message);
console.log(comment);

let special="rohit";
console.log(special);
console.log(special.charAt(3));

console.log(special[4]);


//uppercase and lower case
let name="Deepak"
console.log(name.toLowerCase());    //no change in original stirng
console.log(name);

console.log(name.toUpperCase());


//Searching in string
let hero="Hello Deepak Kumar Deepak"
console.log(hero.indexOf('Deepak'));
console.log(hero.lastIndexOf('Deepak'));
console.log(hero.indexOf('deepak')); //not present

console.log(hero.includes('Deepak'));

//extracting substring
let newStr='Hello Don no. 1';
console.log(newStr.slice(6));
console.log(newStr.substring());


//Diff b/w slice and substring
console.log(newStr.slice(-10,10));  //we can use negative index


//replace
let str10='Hello Ji kaise ho Ji';
console.log(str10.replace('Ji','Money'));
console.log(str10.replaceAll('Ji','Money'));


//Conversion in array
let str11="Money! Honey! Sunny! Bunney";
console.log(str11.split("! "));


//Trim 
let str12="    hello ji      ";
console.log(str12);
console.log(str12.length);
console.log(str12.trim());
console.log(str12.trimStart());
console.log(str12.trimEnd());


//New way to create String
let latestString=new String("Hello Deepak");
console.log(latestString);

console.log(typeof latestString);   //stored in heap due to new