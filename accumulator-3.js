//! В файле accumulator-3.js создай массив с десятью элементами строкового типа. Перечисли в них известные тебе названия языков программирования

//? Создай переменную accumulator и собери в ней только те названия, которые длиннее трёх символов. (accumulator будет массивом, вспомни про .push())

const developerLangs = ["CSS", "JavaScript", "HTML", "Python", "C++", "C#", "PHP", "Java", "C", "Racket"]

const accumulator = []

for (let i = 0; i < developerLangs.length; i++) {
    if(developerLangs[i].length > 3) {
        accumulator.push(developerLangs[i])
    }
}
console.log(accumulator)