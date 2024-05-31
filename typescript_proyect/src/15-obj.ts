(()=>{

type Sizes = 'S' | 'M' | 'L' | 'XL';
type Product ={
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}

const products: any[] = [];

const addProduct = (data: Product) => {
  products.push(data);
}

addProduct({
  title: 'Product1',
  createdAt: new Date(1990,1,1),
  stock: 20,
  size: 'M'
});
console.log(products);
products.push(2222);
products.push({
  title: 'Product1',
  createdAt: new Date(1990,1,1),
  stock: 20,
  size: 'M'
});

})();
