(()=>{
  let myProductName = 100;
  myProductName = 123;
  console.log("myProductName:", myProductName);

  let custumerAge: number = 28;
  custumerAge = custumerAge + 1;
  console.log('customerAge:', custumerAge);

  let productInStock: number;
  console.log('productInStock:', productInStock);
  if (productInStock > 10) {
    console.log('tengo un stock mayor a 10');
  }

  let discount = parseInt('aaaa');
  console.log('discount',discount);
  if (discount<= 200) {
    console.log('apply');

  }else{
    console.log('not apply');
  }
  let hex = 0xfff;
  console.log('hex', hex);
  let bin = 0b1010; //10
  console.log('bin',bin);


  const myNumber: number = 10;



})();

