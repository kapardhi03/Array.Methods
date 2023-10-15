const names = ['apple', 'banana', 'avocado'];
const caps = names.map(name=>name.charAt(0).toUpperCase()+name.slice(1));
const final = caps.filter(name=>name.charAt(0)==='A');
console.log(final);