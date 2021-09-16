const person = {
    name: 'Yana',
    age: 28,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    'complex key': 'Complex Value',
    ['key_' + (1+3)]: 'Computed Key', // key_4
    greet() {
        console.log('greet from person')
    },
    info () {
        // console.log('this:', this)
        console.log('Информация про человека по имени:', this.name)
    }
}

console.log(person.name)
const ageKey = 'age'
console.log(person[ageKey])
console.log(person['complex key'])
console.log(person)
person.greet()

person.agg ++
person.languages.push('by')
console.log(person)
// person['key_4'] = undefined
delete person['key_4']

console.log(person)
console.log(person['key_4'])


const name = person.name
const age = person.age
const languages = person.languages

const {name, age, languages} = person
console.log(person)

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('key:', key)
        console.log('value:', person[key])
    }
}

object.key(person).forEach((key) => {
    console.log('key:', key)
    console.log('value:', person[key])
})

context
person.info()

const logger = {
    keys() {
        console.log('object keys: ', Object.keys(this))
    },
    keysAndValues() {
        //'key': value
        console.log(Object.entries(this))
    }
}
logger.keys()
logger.keysAndValues()