
var letra = prompt("Digite uma letra:");


var tipoLetra = (letra === letra.toLowerCase()) ? "Minúscula" : 
                (letra === letra.toUpperCase()) ? "Maiúscula" : 
                "Entrada inválida"; 

alert("A letra é: " + tipoLetra);