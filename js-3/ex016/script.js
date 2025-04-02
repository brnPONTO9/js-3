
var idade = prompt("Digite sua idade:");


idade = Number(idade);

var maioridadeBrasil = (idade >= 18) ? "Maior de idade no Brasil" : "Menor de idade no Brasil";
var maioridadeEUA = (idade >= 21) ? "Maior de idade nos EUA" : "Menor de idade nos EUA";

alert(maioridadeBrasil);
alert(maioridadeEUA);