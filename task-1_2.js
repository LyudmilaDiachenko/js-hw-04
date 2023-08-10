// Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість
// властивостей в об'єкті. 
// Функція повертає число - кількість властивостей.

const countProps = function (obj) {
    let keys = Object.keys(obj)
    return keys.length
};

// Викличи функції для перевірки працездатності твоєї реалізації.
 
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
