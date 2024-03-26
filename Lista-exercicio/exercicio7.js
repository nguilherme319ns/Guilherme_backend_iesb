// 7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 4 e 6.

const prompt = require('prompt-sync')();


console.log("Cálculo Média Ponderada")


    let nota1 = parseFloat(prompt("Digite a sua primeira nota: "));
    let nota2 = parseFloat(prompt("Digite a sua segunda nota: "));
    let mediaPonderada = (4 * nota1 + 6 * nota2) / (4 + 6);

console.log(`Sua média: ${mediaPonderada}`);
