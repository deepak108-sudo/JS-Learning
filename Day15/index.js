//for...of
let arr=[10,20,30,40];

for(let value of arr){
    console.log(value);
}

let str="My name is don"
for(let value of str){
    console.log(value);
}

//for...of do not work on object directly
let obj={
    name:"deepak",
    age:20
}

//Note: Object is not iteratable
// for(let value of obj){
//     console.log(value);
// }

//------ForEach----- Expect num(value),index, element
let arr1=[10,20,40,50];

arr1.forEach(function(num){ //Number ek ek kr k aayenge
    console.log(num);
});

arr1.forEach((num)=> console.log(num)); //Arrow function    ---Do not return anything like map

arr1.forEach((num,index)=>{
    console.log(num,index);
})

arr1.forEach((num,index,a)=>{   //Last two are optional last one is reference of array
    a[index]=num*2;
    console.log(num,index);
});

console.log(arr1);

//--------Filter----- Filter the data---Return true or false ----Expect call back function
let data1=[22,41,52,32,53];

const temp=data1.filter((num)=>{    //return true or false----Expect call back funtion---Three arg as forEach 
    return num%2==0;    //true are selected
});

const temp2=data1.filter(num=> num%2!=0);

console.log(temp);
console.log(temp2);


//------use case of filter-------
const data=[
    {name:"Hemja", age:23, marks:86},
    {name:"Vikash", age:24, marks:30},
    {name:"Deepak", age:23, marks:95},
    {name:"Aakash", age:23, marks:41},
    {name:"Markandey", age:23, marks:71},
    {name:"Abhishek", age:23, marks:23},
]

//I want to filter less than 50
const filtered=data.filter((record)=>{
    return record.marks>50;
})

const result=data.filter(({marks})=> marks>50);

console.log(filtered);
console.log(result);


//-------map------We can modify unlike filter   //Can pass 3 argumnet in call back
const record=[10,20,30,11];
const res=record.map((num)=>{
    return num*num;
})

console.log(res);
console.log(record);

//Chaining of map and filter
const arr2=[2,6,3,5,8,4];

const ans=arr2.filter((num)=>num%2==0).map((num)=>num*num).map((num)=>num/2);

console.log(ans);