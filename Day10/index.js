//how to create object
const obj={
    0:20,
    1:30,
    name:"rohit",
    account_balance:5000,
    gender:"male",      //stored as string : "gender"
    age:23,             
    "account number":4963,   //no space
    undefined:30,
    null:50
}

console.log(obj);

const insta={
    insta_id: "deepakkr108",
    password:"123456789"
}

console.log(insta);

console.log(typeof insta);
console.log(obj.name);
console.log(obj.gender);

console.log(obj["gender"]);
console.log(obj["account_balance"]);
//console.log(obj."account number");  //majboori as to write in square bracker
console.log(obj["account number"]);
console.log(obj["0"]);

console.log(obj);
console.log(obj[1]);    //in no. we can write without string

//---------Object Act as array more clearly array act as object---------
const arr={
    0:10,
    1:20,
    2:40,
    3:50,
    length:3       //array Behave like object
}

console.log(arr[0]);
console.log(arr);

console.log(obj.undefined);
console.log(obj["undefined"]);
console.log(obj.null);
console.log(obj[null]);

//---------Second approach-----
const person= new Object();
console.log(person);

//property add
person.name="Bla Bla";
person.age=80;
person.gender="Male";

//modify property
person.name="Shubham Kumar"

console.log(person);
delete person.age;
console.log(person);

//------Third approach-----
class People{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
}

let per1=new People("Rohit",20,'Male');
let per2=new People("Mohit",20,"female");
console.log(per1);
console.log(per2);


//-------Common method of objects------
let obj1={
    name:"rohit",
    age:20,
    gender:"male"
}

//only keys
const arr1=Object.keys(obj1);
console.log(arr1);

//only values
const arr2=Object.values(obj1);
console.log(arr2);

//Keys: values
const arr3=Object.entries(obj1);
console.log(arr3);

//---Assign use case
const obj3={a:1,b:2};
const obj4={c:3,d:4};

//const obj5=obj3+obj4;  X
const obj5=Object.assign({},obj1,obj3,obj4);
console.log(obj5);

//---Using spread operator
const obj6={...obj1,...obj3,...obj4}; //{{a:1,b:2},{c:3,d:4}} -----> {a:1,b:2,c:3,d:4}
console.log(obj6);