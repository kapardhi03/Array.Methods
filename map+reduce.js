const names = ['apple', 'banana', 'cherry'];
const lengths = names.map(name=>name.length);
const sum = lengths.reduce((num,acc) =>num+acc);
const avg = sum/names.length;
console.log(avg);