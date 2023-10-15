##JS Array methods

#1. Simple Mapping - Capitalize Names
   Given an array of names, use map to return a new array where every name iscapitalized.
   Input: ['alice', 'bob']
   Output: ['Alice', 'Bob']
   

#2. Filtering - Even Numbers
   Given an array of numbers, use filter to return a new array containing only evennumbers.
   Input: [1, 2, 3, 4, 5]
   Output: [2, 4]

   
#3. Basic Reduce - Sum of Numbers
   Given an array of numbers, use reduce to find their sum.
   Input: [1, 2, 3, 4]
   Output: 10

   
#4. Map + Filter - Capitalize and Filter
   Given an array of strings, use map to capitalize each string and then filter out anythat do not start with the letter 'A'.
   Input: ['apple', 'banana', 'avocado']
   Output: ['Apple', 'Avocado']


#5. Map + Reduce - String Lengths
   JS Array methods2Given an array of words, use map to obtain an array of word lengths, and then use reduce to get the average word length.
   Input: ['apple', 'banana', 'cherry']
   Output: 5.33 (because (5+6+6)/3 = 5.33)


#6. Filter + Reduce - Oldest Person
   Given an array of objects representing people with a name and age property, first,filter out anyone younger than 18, and then use reduce to find the oldest person'sname.
   Input: [{name: 'Alice', age: 15}, {name: 'Bob', age: 20}, {name: 'Charlie', age: 22}]
   Output: 'Charlie'



#7. Map + Filter + Reduce - Compound Problem
   Given an array of products with properties name, price, and quantity, use:filter to keep products that have more than 10 items in quantity.map to get an array of product    prices.reduce to get the total cost of all the products.
   Input: [{name: 'Apple', price: 0.5, quantity: 15}, {name: 'Banana', price: 0.25, quantity: 5}, {name: 'Cherry', price: 1, quantity: 12}]
   Output: 10.5 (because 0.5*15 + 1*12 = 10.5)


#8. Chaining with Custom Callbacks
   Given an array of numbers, write a function using filter, map, and reduce suchthat you first filter out non-prime numbers, then square each remaining number, andfinally,    sum all the squared values.
   JS Array methods
   Input: [2, 3, 4, 5]
   Output: 38 (because 2^2 + 3^2 + 5^2 = 4 + 9 + 25 = 38)
