const products =
    [
        {name: 'Apple', price: 0.5, quantity: 15},
        {name: 'Banana', price: 0.25, quantity: 5},
        {name: 'Cherry', price: 1, quantity: 12}
    ];
const filterProducts = products.filter(product=>product.quantity>10);
const product = filterProducts.map((product) => product.price * product.quantity);
const sum = product.reduce((val,acc)=>val+acc);
console.log(sum);