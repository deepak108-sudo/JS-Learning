//Store in key-value pair
let map=new Map([
    [10,20],
    ["rohit","rohit"],
        [10,20],
        [30,"sarvan"]
    ]);

console.log(map);

map.set(10,22); //updated last value
console.log(map);
console.log(map.has("rohit"));

//Iterate
map.forEach((key,value)=> console.log(key,value));
map.forEach((value,key)=> console.log(key,value));

for(let value of map){
    console.log(value);
}

//seprte
for(let [key,value] of map){
    console.log(key,value);
}