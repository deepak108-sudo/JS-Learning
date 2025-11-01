const user1={
    name:"deepak",
    age:20
}

const user2={
    acc:4585568,
    aadhar:24446544
}


console.log(user2.name);

//now i want to inherit from user1(imp)
user2.__proto__=user1;
console.log(user2.name);

let arr=[10,20,30,40];
console.log(arr.__proto__==Array.prototype);
console.log(arr.__proto__.__proto__==Object.prototype);
console.log(arr.__proto__.__proto__.__proto__==null);