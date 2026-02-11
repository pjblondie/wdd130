
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

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];


const students = [
    {last: 'Andrus', first: 'Aaron', grade: 'A'},
    {last: 'Masa', first:'Manny', grade: 'B'},
    {last: 'Tanda', first: 'Tamanda', grade: 'C'},
];
words.map(word => `<li>${word}</li>`).join('');

const studentNames = students.map(studentName => `<div
    <h2>${studentName.first} ${studentName.last} | Letter Grade:  ${studentName.grade} |</h2>
    <li></li>
     <hr>
     </div>`).join('')

document.querySelector('#js_names').innerHTML = studentNames

