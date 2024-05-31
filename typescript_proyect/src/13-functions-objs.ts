(()=>{

  const login = (data:  {email: string, password: number}) => {
  console.log(data.email, data.password);
}

//login('nico@mail.com', '12222');
//login('nico@mail.com', '12222');

login({
  email: 'm@mail.com',
  password: 1234
});

type Sizes = 'S' | 'M' | 'L' | 'XL';

const products: any[] = [];

const addProduct = (data: {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}) => {
  products.push(data);
}

addProduct({
  title: 'Product1',
  createdAt: new Date(1990,1,1),
  stock: 20,
  size: 'M'
});
console.log(products);

})();
