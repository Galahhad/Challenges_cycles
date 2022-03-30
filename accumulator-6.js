//! В файле accumulator-6.js создай массив с десятью элементами числового типа.

//? Создай переменную accumulatorOdd и собери в ней нечетные числа массива.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

const accumulatorOdd = []

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 1) {
        accumulatorOdd.push(numbers[i])
    }
}
console.log(accumulatorOdd)