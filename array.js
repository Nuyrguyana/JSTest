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
[0][1][2][3][4]
method
cars.push('Рено')
cars.unshift('Волга')
const firstCar = cars.shift()
const lastCar = cars.pop()
console.log(firstCar)
console.log(lastCar)
console.log(cars)

console.log(cars.reverse())
console.log(cars)

const index = cars.indexOf('БМВ')
cars [index] = 'Porsche'
console.log(cars)

let findedPerson
for (const person of people) {
    if (person.budget === 4500) {
        findedPerson = person
    }
}
console.log(findedPerson)

const index = people.findIndex(function(person) {
return person.budget === 4500
})
const person = people.find(function (person) {
    return person.budget === 4500
})

const person = people.find(person => person.budget === 4500)
console.log(person)

console.log(cars.includes('Мазда'))

const upperCaseCars = cars.map (car => { // map - сопоставление (преобразовывает данные)   => - lambda
    return car.toUpperCase()
})

const pow2 = num => num ** 2
const  sqrt = num => Math.sqrt (num)

const pow2Fib = fib.map(pow2)
const filteredNumbers = pow2Fib.filter(num => {
    return num > 20
})
 console.log(pow2Fib)
console.log(filteredNumbers)

задача 1
const text = 'привет, мы изучаем JavaScript'
const reversText = text.split('').reverse().join('')
console.log(reversText)

const people = [
    {name: 'Yana', budget: 4500},
    {name: 'Misha', budget: 5200},
    {name: 'Lika', budget: 3300}
    ]

const allBudget = people.filter(person => person.budget > 4000)
    .reduce((acc, person) => {
    acc += person.budget
return acc
}, 0)
console.log(allBudget)