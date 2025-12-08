const cart=['Pizza','Burger','Lassi','Maonis'];


function placeOrder(cart,callback) {
  console.log("Taking order from customer...");
  setTimeout(() => {
    console.log("Placing order done");

    const order={orderId:121, food:cart, resturant:"Balaji", location:"saraswati Nagar"};
    callback(order);
  }, 5000);
  console.log("Loop hole");
}

function preparingOrder(order,callback) {
  console.log("Preparing order...");
  console.log("Oiling ,frying, Serving...");

  setTimeout(() => {
    console.log("Preparation Done");
    const foodDetail={tokenId: 122, resturant:order.resturant, location:order.location};
    callback(foodDetail);
  }, 6000);
}

function pickupOrder(foodDetail,callback) {
  console.log("Came here to pick up");
  console.log("Packing, Adding bills...");

  setTimeout(() => {
    console.log("Packup Done.");
    const dropLocation=foodDetail.location;
    callback(dropLocation);
  }, 6000);
}

function deliveryOrder(dropLocation) {
  console.log("Here on the way...");
  setTimeout(() => {
      console.log("Order delivered!!! to ",dropLocation);
    console.log("Thank you for using our services.");
  }, 6000);
}


placeOrder(cart,(order)=>{
    preparingOrder(order,(foodDetail)=>{
        pickupOrder(foodDetail,(dropLocation)=>{
            deliveryOrder(dropLocation);
        });
    })
})
