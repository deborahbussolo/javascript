// declaration or declaração

var nome

// Assignment or atribuição de valores
nome= "Mike"

// que tipo de dado foi colocado na variavel
console.log(typeof nome)
// Agrupamento de declarações
let idade, itsHuman

idade= 20
itsHuman = true

// multiplos argumentos na função
console.log(nome, idade, itsHuman)

// escrita de texto mais variaveis 
console.log(`o ${nome} tem ${idade} anos.`) //usando crase

// Object

const person ={
    name: "John",
    age: 30,
    weigth: 88.6,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos`)

//Array

const animals =['Lion','Monkey','Cat',{name: 'cat', age: 3}]

// acessar valores dentro do Array
console.log(animals[0])
console.log(animals[3].name)

//Exercicios

let name = "Enzo"
let age = 18
let weigth = 55.8
let isSubscribed = true

const student ={
    name: 'Nicolás',
    age: 18,
    color: 'azul',
    animal: 'leopardo', 
}

console.log(`${student.name} tem ${student.age} anos e pesa ${weigth}kg`)

students = [student]

const john ={
    name: 'John',
    age: 20,
    color: 'amarelo',
    animal: 'peixe', 
}
students[1] = john
console.log(students[0],students[1])