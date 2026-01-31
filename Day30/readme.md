Notes on Fetch & Promises

fetch is an async task → it takes time to complete.
The lines after it continue running immediately.

console.log(3 + 4);
const obj = fetch("http://api.weatherapi.com/v1/current.json?key=...&q=raipur&aqi=no");


setTimeout is not reliable for waiting on fetch, because we do not know how long the request will take.

// setTimeout(() => {
//   console.log(obj);
// }, 1000);  // Not guaranteed to wait for fetch


Three states of a Promise:

pending

resolved

rejected

.then() runs only when the Promise is resolved (value received).

.catch() runs when the Promise is rejected (error occurred).

obj.then((data) => {
  console.log(data);  // Runs only after the value arrives
}).catch((error) => {
  console.log(error);
});