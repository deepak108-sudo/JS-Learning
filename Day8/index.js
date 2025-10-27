const arr=[2,5,6,25,9,"Deepak",true,25.5];

console.log(arr.length);
console.log(arr[0]);
console.log(arr[5]);
console.log(arr.at(5)); //at is latest 

//Diff between [] and at : at takes minus
console.log(arr.at(-1));
console.log(arr[-1]);

const newArr=arr;
console.log(newArr);

console.log(newArr==arr);
newArr[0]=999;

console.log(arr);

const arrCopy=structuredClone(arr);
console.log(arrCopy==arr);

arr.push(30);
arr.pop();
arr.push(456);
console.log(arr);

//add element at start
arr.unshift(10);
console.log(arr);

arr.shift()
console.log(arr);   //delete from first index

//delete arr[0];    //leave the hole after deleting
console.log(arr);

arr.push("Banti");
arr.pop();
console.log(arr);

console.log(arr.indexOf(9));
console.log(arr.lastIndexOf(9));
console.log(arr.includes(9));

//slice and splice
console.log(arr);
console.log(arr.slice(2,5));
console.log(arr);               //slice do not alter original array
console.log(arr);

//splice: splice(starting_index,total_element,add value)
//console.log(arr.splice(2,6));
console.log(arr);               //splice alter original

arr.splice(2,3,"money",90);
console.log(arr);

//-------------toString-----
console.log(arr.toString());
console.log(arr);
console.log(arr.join("*")); //convert into string

//----------Concatenation-----
let arr1=[2,3,4,5,6];
let arr2=[8,6,3,10,12];
let arr3=arr1.concat(arr2);
let arr4=[5,96,36,1];
let arr5=[5,5,6,9,3,96,7];
console.log(arr3);

let arr6=arr3.concat(arr4,arr5);
console.log(arr6);

// arr1.push(arr2);
// console.log(arr1[0]);
// console.log(arr1[2]);

let arr2d=[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr2d);
console.log(arr2d[2][0]);

let arr1d=arr2d.flat(); //to convert into 1d array
console.log(arr1d);

let arr3d=[1,2,3,[7,8,9,[7,8,9,6]],10,12,13];
console.log(arr3d);
console.log(arr3d.flat(Infinity));

//check it is array
let abc=[1,2,3];
let s="dkk"
console.log(Array.isArray(abc));    //true
console.log(Array.isArray(s));  //false

//create new array
let ac=new Array(10,20);
console.log(ac.length);