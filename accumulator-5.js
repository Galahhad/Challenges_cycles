//! В файле accumulator-5.js создай массив с десятью элементами числового типа.

//? Создай переменную accumulatorEven и собери в ней четные числа массива.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

const accumulatorEven = []

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        accumulatorEven.push(numbers[i])
    }
}
console.log(accumulatorEven)