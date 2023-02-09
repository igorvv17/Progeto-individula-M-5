import readLineSync from 'readline-sync'
//const readLineSync = require('readline-sync')
import ck from 'chalk'


const valores = []
let input = ""

//laço while 
console.log('programa de prpriedades do css')
while(input != "sair")
{
   valores.push(input)
   input = readLineSync.question("Digite as propriedades de css").toLocaleLowerCase()
}

//mostra o conteudo do vetor
console.log(ck.bgGreen(valores.sort().join('\n')))