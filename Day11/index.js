// let obj1={
//     a:1,
//     b:2
// }

// //shallow copy
// let obj2=obj1;

// obj2.a=99;
// console.log(obj1);
// console.log(obj2);

// //deep copy
// let obj3={
//     a:1,
//     b:2
// }


// let obj4=structuredClone(obj3);
// obj4.a=5;
// console.log(obj3,obj4);

// //Nested Object
// const user={
//     name:"Rohit",
//     balance:420,
//     address:{
//         pincode:492001,
//         city:"raipur"
//     }
// }

// console.log(user.address.pincode);
// console.log(user);
// console.log(user.address);

// //---Create deep copy using assign. Conclusion: Shallow in nested and deep copy otherwise so use structuredClone
// const user1=Object.assign({},user);
// user1.name="Sanket"
// user1.address.pincode=825361;
// console.log(user,user1);

// //------Destructuring of an object------
// let obj={
//     name:"Rohit",
//     money:430,
//     age:20,
//     pincode:456326,
//     aadhar:"djfdjfdjsf"
// }

// // const {name,money,age}=obj;
// // console.log(name,money,age);

// //second way
// const {name:fullname,money:amt,age:umr}=obj;
// console.log(fullname,amt,umr);

// //third way
// const {name,age,...rem}=obj;
// console.log(name,age,rem);

// //Array distructuring
// const arr=[3,4,2,4,3];
// const [first,second]=arr;
// const [first1,second1, ,third]=arr;
// const [first2,second2,...rest]=arr;
// console.log(first,second,third,rest);

//Destructure the nested object

const user={
    name:"Rohit",
    balance:420,
    address:{
        pincode:492001,
        city:"raipur"
    },
    hobbies: ["swimming","painting","bating"],
    greet: function(){
        return "Hello guys"
    },
    meet: function(){
        return 20;
    }
}

const {address:{pincode,city}} =user;
console.log(pincode,city);

const {hobbies:[first,,third]}=user;
console.log(first,third);
console.log(user.greet());
console.log(user.meet());

//-----Prototype Channing-------
