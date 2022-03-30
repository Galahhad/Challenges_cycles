//! Дан массив [10, -12, [231, 1, -32], -0.001, [75, 123, 21], 12, 321, [292, 21]];  Вывести в консоль все вложенные массивы (вывести их именно как массивы, раскрывать не нужно).

const array = [10, -12, [231, 1, -32], -0.001, [75, 123, 21], 12, 321, [292, 21]]

for (let i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])) {
        console.log(array[i])
    }
}

// Дан массив из объектов:

// - Вывести в консоль все имена
// - Вывести в консоль имена всех совершеннолетних людей (от 18 лет)
// - Вывести в консоль имена всех пенсионеров (старше 65 лет)
// - Создайте функцию `addPeople()`, которая принимает два параметра - имя и возраст - и добавляет в массив `people` объект с именем и возрастом, которые были переданы в качестве параметров. 


let people = [{name: 'Bradly', age: 74}, {name: 'Juliya', age: 20}, {name: 'Walter', age: 35}, {name: 'Kristen', age: 12}, {name: 'Sam', age: 2}];

for(let i = 0; i < people.length; i++) {
    console.log(people[i].name)
}

for (let i = 0; i < people.length; i++) {
    if(people[i].age >= 18) {
        console.log(people[i].name)
    }
}

for (let i = 0; i < people.length; i++) {
    if(people[i].age > 65) {
        console.log(people[i].name)
    }
}

function addPeople (name, age) {
    return people.push({name, age})
}

//* Создайте функцию getPositiveArr(), которая будет принимать один параметр - массив, и возвращать новый массив, на основе старого, в который попадут только положительные элементы. Например:

function getPositiveArr(array) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            newArr.push(array[i])
        }
    }
    return newArr
}