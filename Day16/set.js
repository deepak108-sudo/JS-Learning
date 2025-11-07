let arr=[10,20,10,30];
//set unique

const set1=new Set([10,20,30,10,10,20,30,40]);
console.log(set1);

console.log(typeof set1);

set1.add("rohit");
set1.add(50);

console.log(set1);
set1.delete(10);
console.log(set1);

//ig:id Real world
const userId=new Set(["deepakkr108","ravi23","mohit","Sumit"]);
let new_user="ravi23";

if(userId.has(new_user)){
    console.log("Already taken");
}else {
    console.log("Successfully created");
}

console.log(userId);
set1.clear();
console.log(userId);


//Conversion
let age=[20,10,20,30,10,40,50,60];
let st=new Set(age);
console.log(st);

let ageUni=[st];
console.log(ageUni);


//Union
let set2=new Set([10,20,47,60]);
let set3=new Set([48,20,147,60,55,63]);

let union=new Set([...set2,...set3]);
console.log(union);

//Intersection
//filter: array pe lagta h
const result=[...set2].filter((num)=>set3.has(num));
console.log(result);

//Iterate over set
//for of
for(let value of set3)
    console.log(value);

//forEach
set3.forEach((value)=> console.log(value));