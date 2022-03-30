//! В файле arrays-6.js создай массив с десятью элементами числового типа.

//? Ниже напиши цикл, который выводит в консоль всё четные числа.

//* Ниже напиши еще один цикл, который выводит все нечетные числа.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }
}


for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 1) {
        console.log(numbers[i])
    }
}