
//fetch is async task ---> takes time
console.log(3+4);
const obj=fetch(`http://api.weatherapi.com/v1/current.json?key=e40b3956dc9045d782064312250712&q=raipur&aqi=no
`);

// setTimeout(()=>{    //Not determined how much time does it take
//     console.log(obj);
// },1000);


//Three state of Promise --> pending ----> reject ----> resolve
// obj.then((data)=>{      //Format when value comes on obj/promise
//     console.log(data);  //obj.then tabhi chalega jb value aa chuki hogi
// }).catch((error)=>{
//     console.log(error);
// });


const Promises=fetch(`http://api.weatherapi.com/v1/current.json?key=e40b3956dc9045d782064312250712&q=raipur&aqi=no`);

// Promises.then((response)=>{
//     const pro2=response.json();

//     pro2.then((data)=>{
//         console.log(data);
//     })
// });

//2nd Format
// console.log("2nd Format");
// Promises.then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })

console.log("3rd Format");

//3rd format
fetch(`http://api.weatherapi.com/v1/current.json?key=e40b3956dc9045d782064312250712&q=raipur&aqi=no`)
.then(response=>response.json())    //fatl arrow automatically return
.then((data)=>console.log(data.current.temp_c))
.catch(error=>console.log(error));

