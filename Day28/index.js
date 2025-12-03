//Callback hell

function placeOrder(callback){
    console.log('Talking with Dominos');

    setTimeout(()=>{
        console.log("Order Placed successfully");
        callback();
    },5000);
}

function preparingOrder(callback){
    console.log("Preparing the Pizza");
    setTimeout(()=>{
        console.log("Pizza Prepared successfully");
        callback();
    },2000);
}

function pickupOrder(callback){
    console.log("Picking up order...");

    setTimeout(()=>{
        console.log("Pizza picked up");
        callback();
    },3000);
}

function deliverOrder(){
    console.log("Delivery boy are on the way");

    setTimeout(()=>{
        console.log("Dilivered successfully");
    },5000);
}

// placeOrder();
// preparingOrder();
// pickupOrder();

placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    });
})