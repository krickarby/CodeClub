//isPrime
function isPrime(item) {
  if (item.type === "prime") {
    return true
  } else return false  
}

//primeItems
function primeItems(cart) {
    return cart.filter(isPrime)
  }

//couponFucntions
function makeCouponFunction(type, discount) {
    function couponFunction(item) {
      if (item.type === type) {
        item.price = item.price * discount
     }
    return item
   }
   return couponFunction
 }

 //applyCoupon
 function applyCoupon(cart, couponFunction) {
    cart.map(couponFunction);
  }

  //totalCost
  function totalCost(cart) {
    return cart.reduce((acc, current) => {
      return acc + current.price;
    }, 0)
  }