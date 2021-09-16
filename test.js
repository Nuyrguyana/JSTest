const family = []
family[family.length] = 'yasya'
family[family.length] = 'yana'
family[family.length-1] = 'yana1'
console.log(family)
const member = family.pop()
console.log(member)
console.log(family)

const family = ['yana', 23, true]
console.log(family)
const member = family[family.length-1]
console.log(member)
console.log(family)


for (let i = 0; i < 50; i++ ) {
    console.log('Привет')
}