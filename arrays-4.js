//! В файле arrays-4.js создай массив с десятью элементами строкового типа. Перечисли в них известные тебе названия языков программирования.
//? Ниже напиши цикл, который выводит в консоль все названия длиннее трёх символов.

const developerLangs = ["CSS", "JavaScript", "HTML", "Python", "C++", "C#", "PHP", "Java", "C", "Racket"]

for (let i = 0; i < array.length; i++) {
    if(array[i].length > 3) {
        console.log(array[i])
    }
}