// 3. Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário
const prompt = require('prompt-sync')();
    
    let salarioAtual = parseFloat(prompt("Digite o salário mensal atual:"));
    let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste (%):"));

    let novoSalario = salarioAtual * (1 + percentualReajuste / 100);


console.log(`O novo salário é: R$ ${novoSalario.toFixed(2)}`);
