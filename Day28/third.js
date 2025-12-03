//Js is a single threaded(one task will be executed at a time) synchronous language

// console.log("10");

// console.log("20");

// console.log("30");

//Async behaviour
console.log("10");

//---------------setTimeout is not part of javascript so it behave like async
setTimeout(() => {
  console.log("20");
}, 5000);

console.log("30");

//---------comparsion----
console.log("10");

const timer = Date.now();

while (Date.now() - timer < 2000) {
  //Wait for 2 second
}

console.log("30");
