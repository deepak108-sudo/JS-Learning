//Callback function
//Imp: Function ke andar as an argument ek function ko bhejna hi callback function

 function greet(fun){      //Taking ref. as an argument
    console.log("Hello Good Morning");
    fun();
 }
 
 function heat(){
   console.log('I am callback function');
 }


 greet(heat);     //Here we are sending reference


 
 //-----Different ways to do that
 function sayName(fun){
   console.log("Hello Mr.");
   fun();
 }

 sayName(()=>{console.log("Deepak");}); //Passed directly arrow function

 let name=()=> console.log("Deepak");
 sayName(name);



//----------Use Cases of callback: I want to call in interval
let greeting=(login)=> {
   console.log("Hello Jonas and Martha");
   login();
}

let login=()=> console.log("You are successfully logined");
greeting(login);



//2nd Use case: I want to fetch in interval
let fetch=()=>{
   console.log("Fetching Data from backend");
}

setInterval(fetch,2000);