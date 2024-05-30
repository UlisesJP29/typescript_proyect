(() => {

  let productTitle = 'My amazing product';

  productTitle = 'My amazing product changed';
  console.log('producTitle', productTitle);

  const productDescription = "bla bla bla";
  console.log('productDescription', productDescription);

  const summary = `
  Title: ${productTitle}
  description: ${productDescription}
  price: 99
  `;
  console.log(summary);

})();
