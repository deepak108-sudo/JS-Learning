let obj={
    name:"Vikash",
    age:23,
    gender:"male",
    city:"raipur"
};

//for in loop : Iterating in object
for(let key in obj){
    console.log(`${key} : ${obj[key]}`);
}

let obj2=Object.create(obj);    //inherited
obj2.money=420;
obj2.id=101;

console.log(obj2);
console.log(obj2.name);

//only print those which are of those
console.log(Object.keys(obj2));

//Diffrence: for in also 