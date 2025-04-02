var temperatura = prompt("Digite a temperatura em graus Celsius:");

temperatura = Number(temperatura);

var clima = (temperatura < 15) ? "Frio" :
            (temperatura >= 15 && temperatura <= 25) ? "Agradável" :
            "Quente"; 

alert("O clima está: " + clima);