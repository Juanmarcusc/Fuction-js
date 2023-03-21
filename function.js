// declaration 
// function statement

function createPhrases () {
    'Deus e o seu pai'
     'tudo na vida passa'
}
createPhrases ()

// Function expression or Function anonymous 
const sum= function (number1, number2) {
       let total = number1 + number2
        return total
}

let number1 = 34
let number2 = 25 
console.log (`o numero 1 e ${number1}`)
console.log (`o numero 2 e ${number2}`)
console.log (`a soma e ${sum(number1,number2)}`)


// Function scope 

let subject = 'sorria'
function createThink(subject) {
   return subject = 'nao sorria'
}

console.log(subject)
console.log(createThink(subject))
console.log(subject)



// Function Hoiting 

estilo ()
 function estilo() { 
    console.log('Lee Koon Hung')
}

// Arrow Function 
const estilo2= () => {
    console.log('Lee Koon Hung 2')
}
estilo2 ()

//Callback Function 
function meuNome(nome) {
    console.log('antes de executar a callback')
    nome ()
    console.log('depois de executar a callback')
}
meuNome(
    () => {
        console.log('estou em uma callback')
    }
)
function Person(name) {
	this.name = name
	this.walk() = function() {
		return this.name + "esta andando")
	}
}
const mayk = new Person("Juan")
const joao = new Person("Joao")