function placeOrder(callback){
    console.log("Taking order from customer...");
    setTimeout(()=>{
        console.log("Placing order done");
        callback();
    },5000);
    console.log("Loop hole");
}

function preparingOrder(callback){
    console.log("Preparing order...");
    setTimeout(()=>{
        console.log("Oiling ,frying, Serving...");
    },4000);
    setTimeout(()=>{
        console.log("Preparation Done");
        callback();
    },6000);
}

function pickupOrder(callback){
    console.log("Came here to pick up");
    setTimeout(()=>{
        console.log("Packing, Adding bills...");
    },5000);
    setTimeout(()=>{
        console.log("Packup Done.");
        callback();
    },6000);
}

function deliveryOrder(){
    console.log("Here on the way...");
    setTimeout(()=>{
        console.log("Order delivered!!!");
        console.log("Thank you for using our services.");
    },6000);
}

placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliveryOrder();
        });
    })
})