/*
VAR - varia
LET -
CONST - constante, não pode mudar o valor durante a aplicação
*/

var clima = "quente"
clima = "Frio"

let temperatura = 28
temperatura = 10

const calor = "quente"

console.log(clima, temperatura, calor)

//typeof para ver o tipo da variavel

console.log(typeof clima,typeof temperatura, typeof calor)

//JavaScript é fracamente tipada e é dinamica

//Scope e var
//hoisting, ele pega a var e joga pra cima do codigo. Então o JS sabe que existe uma var x, mas ainda não tem o valor dela.
//var é GLOBAL

console.log("> existe x antes do bloco?", x)
{
    var x = 0
}
console.log("> existe x depois do bloco?", x)

//Scope let e const
//let y só existe no scopo LOCAL
let y = 1;
{
    //console.log("> existe y antes da let?", y) Dá erro!
    y = 0
    console.log("> existe y no bloco?", y)
}
    console.log("> existe y depois do bloco?", y)
    //nesse caso ele pegou o let existente e atribuiu um novo valor

const z = 0
console.log("> qual o valor da const z nesse scope?", z)
{
    const z =1
    console.log("> qual o valor da const z nesse scope?", z)
}
//o valor da const é fixa, mas pode haver const com o mesmo nome em SCOPE DIFERENTES.

//JavaScript é case-sensitive