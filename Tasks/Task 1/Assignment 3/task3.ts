function Products(productPrice: number, discountPercentage: number) {
  let discountAmount = productPrice * (discountPercentage / 100);
//   console.log(`${discountAmount}%`);
    let finalPrice = productPrice - discountAmount
  if(discountPercentage>=50){
    console.log("Discount percentage is invalid.")
  }
  else{
    console.log(`Original Price is ${productPrice} and after applying ${discountPercentage}%, the discounted price is ${discountAmount} and final pice is ${finalPrice}`)
  }
}
Products(1000, 20);
