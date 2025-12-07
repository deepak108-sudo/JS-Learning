const input=document.getElementById('text');
const result=document.getElementById('result');
const button=document.querySelector('button');


button.addEventListener('click',getWeather);

function getWeather(){

    const weatherPromise=fetch(`http://api.weatherapi.com/v1/current.json?key=e40b3956dc9045d782064312250712&q=${input.value}&aqi=no
`);

    const temp=weatherPromise.then((response)=>{
        return response.json();
    })
    .then((data)=>{
        result.value="Temperature : "+data.current.temp_c;
    }).catch((error)=>{
        console.log(error);
        result.value="Error";
    });
}