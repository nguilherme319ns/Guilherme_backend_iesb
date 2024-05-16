// 8. Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos. OBS: V = PI * Raio^2 * Altura

const prompt = require('prompt-sync')();

let raio = parseFloat(prompt("Digite o raio da caixa d'água (em metros):"));
let altura = parseFloat(prompt("Digite a altura da caixa d'água (em metros):"));

let volume = Math.PI * Math.pow(raio, 2) * altura;


console.log(`O volume da caixa d'água é: ${volume.toFixed(2)} metros cúbicos`);
