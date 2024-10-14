// 1. How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

// 2.  Conditions
// 6 basic condition: >,<,===,!==,<=, >=
// Multiple  condition: &&,||

if (fatherNam === 'arnold' || season === 'rainy') {

}
else if (fatherName === 'Arnold') {

}
else {

}

// 3. Array declare
// index
// length
// push
const numbers = [23, 54, 76, 87];
numbers[0] = 56;

// 4. for loop 
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}


// 5. function
function Multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const output = Multiply(2, 5);
console.log(output);


// 6. Object
//3 ways to access property by name 
const student = {
    name: 'kanto',
    age: 21,
    class: 10,

};
const myvariable = 'age';
console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myvariable]);