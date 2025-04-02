var numero = prompt("Digite um número:");

numero = Number(numero);

var resultado = (numero % 2 === 0) ? 'Par' : 'Ímpar';

alert("O número " + numero + " é " + resultado + ".");