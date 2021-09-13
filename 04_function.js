// 1 функции
//Function declaration // можно расположить ф-ию после вызова ф-ии greet
// function greet (name) {
//     console.log('привет - ', name)
// }

//function expression //
// const greet2 = function greet2 (name) {
//     console.log('привет 2 - ', name)
// }

// greet('Лена')
// greet2('Лена')

// console.log(typeof greet)
// console.dir(greet)

// 2 анонимные функции
// let counter = 0
// const interval = setInterval(function() {
//     if (counter === 5) {
//         clearInterval(interval)
//     }else  {
//         console.log(++counter)
//     }
// } , 1000)

// 3 стрелочные функции
function greet () {
    console.log('привет - ', name)
}
const arrow = (name, age) => {
    console.log('привет - ', name, age)
}
const arrow2 = name => console.log('Привет - ', name)
// arrow2('Яна')
const pow2 = num => num ** 2
// console.log(pow2(5))

// 4 параметры по умолчанию

const sum = (a = 40, b = a * 2) => a + b
console.log(sum(41, 4))
console.log(sum())

function sumAll (...all) {
let result = 0
    for (let num of all) {
        result += num
    }
    return result
}

const res = sumAll(1, 2, 3, 4, 5)
console.log(res)

// 5 замыкание
function createMember(name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}
const logWithLastName = createMember('Yana')
console.log(logWithLastName('Deyeva'))
console.log(logWithLastName('Ustinova'))