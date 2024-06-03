import { addProduct, calcStock, products } from './product.service';

addProduct({
  name: 'Product1',
  createdAt: new Date(1990,1,1),
  stock: 20,
  size: 'M'
});

addProduct({
  name: 'Product2',
  createdAt: new Date(2000,4,1),
  stock: 20,
  size: 'XL'
});

console.log(products);
const total = calcStock();
console.log(total);
