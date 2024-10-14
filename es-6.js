const numbers = [23, 54, 76, 87];

const student = {
    name: 'kanto',
    age: 21,
    class: 10,
};


// 1. template string
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked`;
console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// 3. spread operator
const newNumbers = [...numbers];
numbers.push(67);
numbers.push(67);
numbers.push(67);

console.log(newNumbers);


// create a new array from an older array and add  an element
const currentNumbers = [...numbers, 55];
console.log(currentNumbers);