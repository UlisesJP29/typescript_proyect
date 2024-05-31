(() =>{
    let prices = [1,2,3,4,5,212,'hola',true];
    //prices.push(true);
    //prices.push('hola');
    prices.push(1233);

    let products = ['hola',true];
    //products.push(21);

    let mixed: (number | string | boolean | Object)[]= ['hola', true];
    mixed.push(12);
    mixed.push([]);

    let numbers = [1,2,3,4,5,212];
    numbers.map(item => item * 2);


})();
