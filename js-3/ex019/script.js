var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));

var media = (nota1 + nota2 + nota3) / 3;

var resultado = (media >= 6) ? "Aprovado" : "Reprovado";

alert("Média final: " + media.toFixed(2));
alert("Resultado: " + resultado);