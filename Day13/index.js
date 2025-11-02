age=30;

if(age>=18){
    console.log("Eligible for vote");
}
else{
    console.log("Not Eligible for vote");
}

//switch
switch(new Date().getDay()){
    case 0: 
        console.log("Sunday");
        break;

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thrusday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;
}

//----Loop 
for(let i=0;i<20;i++) 
    console.log("Hello deepak");

//Sum of first n number
let sum=0;
for(let i=1;i<=10;i++){
    sum+=i;
}

console.log(sum);

//pattern
for(let i=0;i<=5;i++){
    for(let j=1;j<=5;j++){
        process.stdout.write(j.toString());
    }
    process.stdout.write('\n');
}