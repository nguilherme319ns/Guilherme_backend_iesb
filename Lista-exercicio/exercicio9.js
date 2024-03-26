// 9. Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.

const prompt = require('prompt-sync')();

    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    let soma = numero1 + numero2;

    let resultado = soma * numero1;

console.log(`O resultado é: ${resultado}`);
