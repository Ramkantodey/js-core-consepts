// JSON
const student = {
    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan'],
}

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);


// 2. fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));


// keys, values
const keys = Object.keys(student);
const values = Object.values(student);