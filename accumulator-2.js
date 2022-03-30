//! В файле accumulator-2.js создай массив с десятью элементами числового типа. Три числа должны быть меньше нуля.

//? Создай переменную accumulator и собери в ней сумму всех положительных элементов массива.

const numbers = [1, -2, 3, 4, -5, 6, 7, -8, 9, 10]

let accumulator = 0

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
        accumulator += numbers[i]
    }
}
console.log(accumulator)