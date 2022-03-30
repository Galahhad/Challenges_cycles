
const todoListObject = {
    items: [
        {
        text: "Завершить текущий челлендж",
        completed: false
        },
        {
        text: "Отдохнуть во время перерыва",
        completed: false
        },
        {
        text: "Помочь напарнику понять код",
        completed: false
        },
        {
        text: "Выиграть в мафию",
        completed: true
        },
    ],
};


//! В данном релизе нужно реализовать метод printAll(), который будет выводить текст каждого элемента в консоль.

//! Для реализации тебе понадобится цикл for.

// todoListObject.printAll = function () {
//     for(let i = 0; i < this.items.length; i++) {
//         console.log(this.items[i].text)
//     }
// }

// Напиши метод add(), который будет принимать один параметр (текст дела) и добавлять его в начало массива items.

// Имей в виду, что items – это специальная структура данных: массив с объектами одинаковой формы (одинаковые свойства). Добавляя новый элемент в этот массив ты не должен нарушать эту структуру.

// Значение свойства completed для добавляемых элементов должно быть равным false.

// todoListObject.add = function (text) {
//     return this.items.unshift({text, completed: false})
// }

//* Назови метод remove(). Он будет принимать на вход один числовой параметр – индекс удаляемого элемента.

//* Для удаления элемента из массива по его индексу тебе понадобится метод массивов .splice().

todoListObject.remove = function (num) {
    return this.items.splice(num, 1)
}

//? Напиши метод print(). Он должен

//? принимать один параметр – это будет индекс элемента.
//? выводить в консоль текст этого элемента.

// todoListObject.print = function (num) {
//     return this.items[num].text
// }

//! Доработай функцию print так, чтобы перед текстом дела он выводил пиктограмму [ ] если дело не завершено, либо [х] в ином случае.

todoListObject.print = function (num) {
    if(this.items[num].completed === true) {
        return `[x] ${this.items[num].text}`
    }
    return `[ ] ${this.items[num].text}`
    }

// Метод printAll(), созданный в нулевом релизе теперь устарел: он выводит элементы без пометок об их завершенности.

// Текущий релиз должен исправить это.

// Подсказка: ты можешь в цикле вызывать метод print, передавая в него индексы, а он будет выводить в консоль элементы по отдельности. Таким образом тебе не придется повторять участки кода.

// Это не обязательное требование! Если ты потратил 5 минут и не смог разобраться как использовать эту подсказку, то делай так, как тебе удобнее. В конце дня мы разберем все эти моменты.

todoListObject.printAll = function () {
    for(let i = 0; i < this.items.length; i++) {
        console.log(this.print(i))
    }
}

//* создай метод complete, который принимает в качестве параметра индекс. Элемент с указанным индексом должен помечаться завершенным. То есть значение свойства completed этого объекта должно поменяться на true.

todoListObject.complete = function (num) {
    let truth = this.items[num].completed = true
        if(this.items[num] === false) {
        }
        return truth
}