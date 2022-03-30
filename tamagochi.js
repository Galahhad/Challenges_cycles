//! Для начала тебе нужно создать объект tamagochi со следующими свойствами: имя, еда, энергия, настроение. Подбери им соответствующие названия, не забывай о запахах кода. Все свойства, кроме имени, в значениях должны иметь числа от 0 до 5.

const tamagochi = {
    name: 'Пикачу',
    food: 3,
    energy: 5,
    mood: 2,
}

// Добавь метод getStatus(), который будет выводить в консоль значения всех свойств объекта.

// tamagochi.getStatus = function () {
//     return `Имя: ${this.name}, Еда: ${this.food}, Энергия ${this.energy}, Настроение: ${this.mood}`
// } 

//* Добавь метод setName() который будет принимать один параметр, и устанавливать этот параметр в значение имени.

tamagochi.sentName = function (name) {
    return tamagochi.name = name
}

//? Добавь 3 новых метода, которые будут отвечать за следующие действия: кушать, спать, играть. Подбери им соответствующие названия. Функционал у методов должен быть следующим:

//? метод "кушать" должен увеличивать свойство "еда" на 1 и уменьшать свойство "настроение" на 1.
//? метод "спать" должен увеличивать свойство "энергия" на 1 и уменьшать свойство "еда" на 1.
//? метод "играть" должен увеличивать свойство "настроение" на 1 и уменьшать свойство "энергия" на 1.

tamagochi.eat = function () {
    if(this.food && this.food < 5) {
    this.food++
    this.mood--
}
    return "И вкусно и грустно" 
}

tamagochi.sleep = function () {
    if(this.energy && this.energy < 5) {
        this.energy++
        this.food--
    }
    return "После сна так и тянет поесть"
}

tamagochi.play = function () {
    if(this.mood && this.mood < 5) {
    this.mood++
    this.energy--
}
    return "Поиграли теперь можно и отдохнуть"
}


//! В этом релизе сделаем тамагочи чуть более общительным, чтобы он мог в более понятной форме объяснить свое состояние.

// tamagochi.getStatus = function () {
//     let status_food = this.food < 3 ? 'Я голоден' : 'Я не голоден'
//     let status_mood = this.mood < 3 ? 'Я хочу спать' : 'Я не хочу спать'
//     let status_energy = this.energy < 3 ? 'Мне скучно' : 'Мне весело'
//     return `Имя: ${this.name}, Еда: ${status_food}(${this.food}), Энергия: ${status_energy}(${this.energy}), Настроение: ${status_mood}(${this.mood})`
// } 

// Доработай метод getStatus() так, чтобы при нулевом (или меньшем) значении одного из свойств: еда, энергия или настроение, метод выводил в консоль [имя] умер :(.

tamagochi.getStatus = function () {
    let status_food = this.food < 3 ? 'Я голоден' : 'Я не голоден' 
    let status_mood = this.mood < 3 ? 'Я хочу спать' : 'Я не хочу спать'
    let status_energy = this.energy < 3 ? 'Мне скучно' : 'Мне весело'
    if(this.food === 0 || this.mood === 0 || this.energy === 0) {
        return 'Я умер :)'
    }
    return `Имя: ${this.name}, Еда: ${status_food}(${this.food}), Энергия: ${status_energy}(${this.energy}), Настроение: ${status_mood}(${this.mood})`
}
