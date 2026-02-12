
const grades = ['A', 'B', 'C', 'D', 'F']

function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

function Lconvert(points) {
    switch (points){
        case 4:
            letterPoints = 'four';
            break;
        case 3:
            letterPoints = 'three';
            break;
        case 2:
            letterPoints = 'two';
            break;
        case 1:
            letterPoints = 'one';
            break;
        case 0:
            letterPoints = 'zero';
            break;
        default:
            alert('not a valid number');
    }
    return letterPoints;
}

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];


const students = [
    {last: 'Andrus', first: 'Aaron', grade: 'A'},
    {last: 'Masa', first:'Manny', grade: 'B'},
    {last: 'Tanda', first: 'Tamanda', grade: 'C'},
    {last: 'Parker', first: 'Peter', grade: 'D'},
];


const pointValues = students.map(student => {
    return convert(student.grade);
});
console.log(pointValues); 

let valueSum = 0;
let valueAvr = 0;
pointValues.forEach(value => {
    const totalNumbers = pointValues.length
    
    valueSum += value;
    valAvr = valueSum/totalNumbers
   


})


console.log(valueSum);
console.log(valAvr)



words.map(word => `<li>${word}</li>`).join('');

const studentPoints = students.map(student => {
    const points = convert(student.grade)
    console.log(points)
    const lPoints = Lconvert(points)
    console.log(lPoints)
    return `<li>${lPoints}</li>`   
}).join('');






document.querySelector("#gradePoint").innerHTML = studentPoints 

const studentNames = students.map(studentName => `<div>
    <h2>${studentName.first} ${studentName.last} | Letter Grade:  ${studentName.grade} |</h2>
    <li></li>
     <hr>
     </div>`).join('')

document.querySelector('#js_names').innerHTML = studentNames

