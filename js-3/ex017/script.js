
var temperatura = prompt("Digite a temperatura:");


var unidade = prompt("Digite a unidade (C para Celsius, F para Fahrenheit):").toUpperCase();


var temperaturaConvertida = (unidade === "C") 
    ? (temperatura * 9/5) + 32 
    : (unidade === "F") 
    ? (temperatura - 32) * 5/9 
    : "Unidade inválida"; 

if (typeof temperaturaConvertida === "string") {
    alert(temperaturaConvertida); 
} else {
    alert("Temperatura convertida: " + temperaturaConvertida.toFixed(2) + "°" + (unidade === "C" ? "F" : "C"));
}