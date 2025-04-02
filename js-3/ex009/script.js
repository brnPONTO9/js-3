var horas = prompt("Digite a quantidade de horas (0-23):");

horas = Number(horas);

var periodo = (horas >= 5 && horas <= 11) ? 'Manhã' :
              (horas >= 12 && horas <= 17) ? 'Tarde' :
              (horas >= 18 && horas <= 23) ? 'Noite' :
              (horas >= 0 && horas < 5) ? 'Madrugada' :
              'Hora inválida'; 

alert("O período do dia é: " + periodo + ".");