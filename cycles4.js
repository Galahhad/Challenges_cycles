//! Напиши функцию, которая принимает массив из чисел и возвращает сумму его элементов.

function arraySum (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

// Напиши функцию, которая принимает массив из чисел и возвращает сумму только положительных элементов.

function arrayEvenSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            sum += array[i]
        }
    }
    return sum
}

//* Напиши функцию, которая принимает массив из названий языков программирования. Она должна возвращает названия тех элементов, длина которых больше трёх символов.

function developLangs (array) {
    const accamulator = []
    for (let i = 0; i < array.length; i++) {
        if(array[i].length > 3) {
            accamulator.push(array[i])
        }
    }
  return accamulator
}

//? Напиши функцию, которая принимает массив из имен. Функция должна вернуть новый массив с именами, которые начинаются либо на "а" либо на "у".

function arrayNames(array) {
    const accamulatorNames = []
    for (let i = 0; i < array.length; i++) {
        if(array[i][0].toUpperCase() === 'а'.toUpperCase() || array[i][0].toUpperCase() === 'у'.toUpperCase()) {
            accamulatorNames.push(array[i])
    }
}
return accamulatorNames
}

//! Допиши функцию deleteMessages так, чтобы она вовзращала новый массив, из которого удалены все объекты с ключами deleted равными true.

function deleteMessage(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if(array[i].deleted !== true) {
            newArray.push(array[i])
        }
    }
    return newArray
}

