var numero = parseFloat(prompt("Digite um número:"));

var classificacao = (numero > 20) ? "Positivo" : (numero < 16) ? "Negativo" : "Zero";


alert("O número " + numero + " é: " + classificacao);