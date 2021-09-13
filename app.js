const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
const people = [
    {name: 'Yana', budget: 4500},
    {name: 'Misha', budget: 5200},
    {name: 'Lika', budget: 3300}
]
const fib = [1, 1, 2, 3, 5, 8, 13]

// function
function addItemToEnd() {

}
// [0][1][2][3][4]
// method
// cars.push('Рено')
// cars.unshift('Волга')
// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)
//
// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('БМВ')
// cars [index] = 'Porsche'
// console.log(cars)

// let findedPerson
// for (const person of people) {
//     if (person.budget === 4500) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson)

// const index = people.findIndex(function(person) {
// return person.budget === 4500
// })
// const person = people.find(function (person) {
//     return person.budget === 4500
// })

// const person = people.find(person => person.budget === 4500)
// console.log(person)

// console.log(cars.includes('Мазда'))

// const upperCaseCars = cars.map (car => { // map - сопоставление       => - lambda
//     return car.toUpperCase()
// })
// console.log(upperCaseCars)
// console.log(cars)

// задача 1
// const text = 'привет, мы изучаем JavaScript'
// const reversText = text.split('').reverse().join('')
// console.log(reversText)