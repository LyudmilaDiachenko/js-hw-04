// Завданя 1
// Створіть програму, яка виводить список студентів 
// та їх оцінок з різних предметів.


let student1 = {
  name: 'Іван',
  grades: {
    математика: 95,
    англійська: 85,
    історія: 90,
  },
};

let student2 = {
  name: 'Марія',
  grades: {
    математика: 80,
    англійська: 90,
    історія: 75,
  },
};

let student3 = {
  name: 'Петро',
  grades: {
    математика: 70,
    англійська: 85,
    історія: 80,
  },
};

let students = [student1, student2, student3]
let grades = {}
  for(let student of students){
    grades[student.name] = student.grades
  }
 
console.table(grades)