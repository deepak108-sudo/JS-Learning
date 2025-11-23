
function timing(){
    const timer=document.getElementById("root");
    const now=new Date();
    const IndianTime=now.toLocaleTimeString();
    timer.innerHTML=IndianTime;
}
const timer=document.getElementById("root");

setInterval(timing,1000);

timer.style.fontSize='100px';
timer.style.display="flex";
timer.style.height='100vh';
timer.style.justifyContent="center";
timer.style.alignItems='center';