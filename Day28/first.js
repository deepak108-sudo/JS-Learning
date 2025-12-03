//Callback

//-----------------------Method 1-----------------------------

// function fetchUser(){
//     console.log('Fetching the user detail...');
//     setTimeout(()=>{
//         console.log("Data fetched successfully");
//         const name="Deepak";

//         greet(name);
//         meet(name);
//     },2000)
// }

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// function meet(name){
//     console.log(`Meet me at 10:00 PM ${name}`);
// }


// fetchUser();

//-------------------Method 2 Using Callback---------------------
function fetchUser(callback){
    console.log('Fetching the user detail...');
    setTimeout(()=>{
        console.log("Data fetched successfully");
        const obj={
            name:"Deepak",
            age:28,
            city:"Raipur"
        }

        callback(obj);
    },2000)
}

function greet(obj){
    console.log(`Hello ${obj.name}`);
}

function meet(obj){
    console.log(`Meet me at 10:00 PM ${obj.name}`);
}

function edit(obj){
    console.log(`Edited name and age ${obj.age}`);
}


fetchUser(edit);