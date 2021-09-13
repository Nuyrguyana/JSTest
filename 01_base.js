//1 Переменные
//camelCase

// const firstName = 'Yana'
// // const lastName = 'Deyeva' // string
// let age = 28 // number
// const isProgrammer = true // boolean
//
// const private = 'private'
// const $ = 'some value'
// const withNum5 = '6'

//2 Мутирование (изменение)
// console.log('Имя человека ' + firstName + ' , а возраст человека: ' + age)
// alert('Имя человека: ' + firstName + ' а возраст человека: ' + age)
//
// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

//3 Операторы
// let currentYear = 2021
// const birthYear = 1993

//console.log(currentYear - birthYear)

// const a = 10
// const b = 5
//
// let c = 32
// c = c+a
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear--)
// console.log(currentYear++)
// console.log(c)

//4 типы данных

// const isProgrammer = true
// const name = 'Yana'
// const age = 28
// let x
// console.log(typeof  isProgrammer)
// console.log(typeof  name)
// console.log(typeof  age)
// console.log(typeof  x)
// console.log(null)

// 5 приоритет операторов

// const fullAge = 28
// const birthYear = 1993
// const currentYear = 2021
// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

// 6 условные операторы

// const courseStatus = 'pending'
// if (courseStatus === 'ready') {
//     console.log('курс уже готов и его можно проходить')
// }
// else if (courseStatus === 'pending') {
//     console.log('курс пока находится в процессе разработки')
// }
// else {
//     console.log('курс не получился')
// }
// const isReady = true
// if (isReady === true) {
//     console.log('все готово')
// }
// else {
//     console.log('не готово')
// }
//
//тернарное выражение
// isReady ? console.log('все готово') : console.log('не готово')

//
// const num1 = 42 //number
// const num2 = '42' //string
//
// console.log(num1 === num2)

// 7 булевая логика
// &&, ||, !

// 8 функция

// function calculateAge(year) {
//     return 2021 - year
// }
//
// console.log(calculateAge(1993))
// console.log(calculateAge(2019))
// console.log(calculateAge(1995))

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//
//     if (age > 0) {
//         console.log ('человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     }
//     else {
//         console.log ('вообще-то это уже будущее')
//     }
// }
//
// logInfoAbout ('Yana', 1993)
// logInfoAbout ('Yasya', 2017)
// logInfoAbout ('Misha', 1997)
// logInfoAbout ('jyg', 2044)

//9 массивы

// const cars =['мазда', 'мерседес', 'форд']
// console.log(cars)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])
//
// cars[0] = 'porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// const family = []
// family[family.length] = 'yasya'
// family[family.length] = 'yana'
// family[family.length-1] = 'yana1'
// console.log(family)
//10 циклы

// const cars =['мазда', 'мерседес', 'форд']
// //   пусть    ; пока           ; то
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// //    i++
// }
//
// for (let car of cars) {
//     console.log(car.toUpperCase())
// }
//
//11 объекты

// const person = {
//     firstName: 'Yana',
//     lastName: 'Deyeva',
//     year: 1993,
//     languages: ['Ru', 'En', 'De'],
//     hasHusband: false,
//     greet: function (name, age, salary) {
//         console.log('Hello ' + name + ', age= ' + age + ', зарплата= ' + salary)
//     }
// }
//
// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'year'
// console.log(person[key]) // [i] - обращение к i-тому элементу массива или объекта
// person.hasHusband = true
// person.isProgrammer = true
// console.log(person)
//
// person.hasChild = true
// person.children = ['Yasya', 'Kirya']
// console.log(person)
//
// person.greet('Misha', 23, 87000)