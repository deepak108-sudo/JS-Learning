const cart=['Pizza','Burger','Lassi','Maonis'];


function placeOrder(cart) {
  console.log("Taking order from customer...");
  

    const pr=new Promise(function(resolve,reject){
        let foodAvailable=true;
        
        if(foodAvailable){
            setTimeout(() => {
                console.log("Placing order done");
                const order={orderId:121, food:cart, resturant:"Balaji", location:"Saraswati Nagar"};
                resolve(order);
              }, 5000);
        }
        else{
            reject("Food Out of Stock");
        }

    })

    return pr;
  console.log("Loop hole");
}

function preparingOrder(order) {
  console.log("Preparing order...");
  console.log("Oiling ,frying, Serving...");

  const pr=new Promise((resolve,reject)=>{
      
      setTimeout(() => {
        console.log("Preparation Done");
        const foodDetail={tokenId: 122, resturant:order.resturant, location:order.location};
        resolve(foodDetail);
      }, 6000);
  })
  return pr;

}

function pickupOrder(foodDetail) {
  console.log("Came here to pick up");
  console.log("Packing, Adding bills...");

  const pr=new Promise((resolve,reject)=>{

      setTimeout(() => {
        console.log("Packup Done.");
        const dropLocation=foodDetail.location;
        resolve(dropLocation);
      }, 6000);
  })

  return pr;

}

function deliveryOrder(dropLocation) {
  console.log("Here on the way...");
  setTimeout(() => {
      console.log("Order delivered!!! to ",dropLocation);
    console.log("Thank you for using our services.");
  }, 6000);
}



placeOrder(cart)
.then((order)=>preparingOrder(order))
.then((foodDetail)=>pickupOrder(foodDetail))
.then(dropLocation=>deliveryOrder(dropLocation))
.catch((error)=>console.log(error));
