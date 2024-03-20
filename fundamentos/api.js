//Importando módulo HTTP
const http = require ('http')

let contador = 0
console.log("contador ligado ze ") 
console.log("contador de requisioção : 0 !")
// criando servidor
// Método listen starta o servidor e define como vai funciona, ou seja ele fica escutando
http.createServer((req, res) => {
// startando servidor(backend - api) para executar as comunicações 
// na porta 3000

contandor++
console.log("Contador de cornos" + contador )

 res.write('voce é o corno numero: ${contador}')
 res.end()
}).listen(3000)
