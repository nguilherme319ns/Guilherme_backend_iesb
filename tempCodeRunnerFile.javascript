/* 1. Faça um script para solicitar o nome do usuário. Exiba uma mensagem de boas vindas com o nome
informado. */

const prompt = require("prompt-sync")()

let nome = String(prompt("Qual o seu nome? "))
console.log(`Olá, ${nome}. Seja bem-vindo! ;D`)
