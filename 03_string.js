const name = 'Яна'
const age = 28

function getAge() {
    return age
}
// const output = 'Привет, мне зовут ' + name + ' и мой возраст ' + age + ' лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'A' : 'B'} лет.`
// console.log(output)

const output = `
<div>This is div</div>
<p>this is o</p>
`
console.log(output)


const name = 'Нюргуяна'
console.log(name.length) // длина строки (сколько символов)
console.log(name.toUpperCase()) // все заглавные буквы
console.log(name.toLowerCase()) // все маленькие буквы
console.log(name.charAt(2)) // 2- это номер позиции в строке, результат будет буква Р
console.log(name.indexOf('!')) // результат -1, отсутствие совпадений
console.log(name.indexOf('у')) // результат 4, буква на позиции 4
console.log(name.toLowerCase().startsWith('нюрг')) // проверка на нижний регистр и начало строки, результат true
console.log(name.startsWith('Нюрг')) // проверка на начало строки, результат true
console.log(name.startsWith('нюрг')) // проверка на начало строки, результат false
console.log(name.endsWith('на')) // проверка на конец строки, результат true
console.log(name.repeat(3)) // повтор строки (чаще используют для тестового текста)
const string = '    password    ' // такую строку могут засчитать как баг
console.log(string.trim()) // убирает все пробелы
console.log(string.trimLeft()) // убирает пробелы слева
console.log(string.trimRight()) // убирает пробелы справа

function logPerson(s, name, age) {
    if (age<0){
        age = 'еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Яна'
const personName2 = 'Максим'
const personAge = 28
const personAge2 = -6
const output = logPerson`Имя: ${personName}, возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, возраст: ${personAge2}!`
console.log(output)
console.log(output2)