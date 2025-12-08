// map() , every(), some(), filter(), find(), findIndex()

const numbers = [1, 2, 3, 4, 5];
const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// map() - Create a new array with the squares of the numbers
const squares = numbers.map(num => num * num);
console.log('Squares:', squares); // [1, 4, 9, 16, 25]  

// every() - Check if all words have more than 3 letters
const allLongerThan3 = words.every(word => word.length > 3);
console.log('All words longer than 3 letters:', allLongerThan3); // true
// some() - Check if there is at least one word that starts with 'b'
const someStartWithB = words.some(word => word.startsWith('b'));
console.log('Some words start with "b":', someStartWithB); // true
// filter() - Get all numbers greater than 2
const filteredNumbers = numbers.filter(num => num > 2);
console.log('Numbers greater than 2:', filteredNumbers);

// find() - Find the first word that has 6 letters
const firstSixLetterWord = words.find(word => word.length === 6);
console.log('First six-letter word:', firstSixLetterWord); // 'banana'

// findIndex() - Find the index of the first number greater than 3
const indexFirstGreaterThan3 = numbers.findIndex(num => num > 3);
console.log('Index of first number greater than 3:', indexFirstGreaterThan3); 