var peso = parseFloat(prompt("Digite seu peso em kg:"));
var altura = parseFloat(prompt("Digite sua altura em metros:"));

var imc = peso / (altura * altura);


var classificacao;
if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso normal";
} else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso";
} else {
    classificacao = "Obesidade";
}

alert("Seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + classificacao);