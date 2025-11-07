//reduce
const arr=[10,20,30,40];

//format: callback fun, initialization
const result=arr.reduce((acc,curr)=>{
    console.log(acc,curr);
    acc=acc+curr;
    return acc;
},0)

const sum=arr.reduce((acc,curr)=> acc+curr ,0);

console.log(result);
console.log(sum);

//hasOwnproperty
let obj={
    name:"rohit",
    age:10,
    orannge:1
}

let curr="orange";

if(obj.hasOwnProperty(curr)){
    obj[curr]++;
}

console.log(obj);

console.log(obj.hasOwnProperty("name"));
//Real world use
let fruit=["orange","apple","banana","orange","apple"];
const res=fruit.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
        acc[curr]=1;

    return acc;
},{})   //{} initial value

console.log(res);
console.log(fruit);