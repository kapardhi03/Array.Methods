const people = [{name: 'Alice', age: 15}, {name: 'Bob', age: 20}, {name: 'Charlie', age: 22}];
const adults = people.filter(person => person.age >=18);
const oldestPerson = adults.reduce((oldest, currentPerson) => {
    return (oldest.age > currentPerson.age) ? oldest : currentPerson;
}, {});
console.log(oldestPerson.name);