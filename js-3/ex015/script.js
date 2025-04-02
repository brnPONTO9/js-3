var nota = prompt("Digite uma nota de 0 a 10:");

nota = Number(nota);

var classificacao = (nota >= 9) ? "Excelente" :
                    (nota >= 7 && nota < 9) ? "Bom" :
                    (nota >= 5 && nota < 7) ? "Regular" :
                    (nota < 5 && nota >= 0) ? "Insuficiente" :
                    "Nota inválida"; 

alert("Classificação: " + classificacao);