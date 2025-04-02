var preco = parseFloat(prompt("Digite o preço do produto:"));

var classificacao = (preco < 20) ? "Barato" :
                    (preco >= 20 && preco <= 100) ? "Médio" :
                    "Caro"; 

alert("Classificação do produto: " + classificacao);