var valorCompra = prompt("Digite o valor total da compra:");

valorCompra = Number(valorCompra);

var codigoDesconto = prompt("Digite o código de desconto:");

var precoFinal = (codigoDesconto === "DESC10") ? valorCompra * 0.9 : valorCompra;


alert("O preço final da compra é: R$ " + precoFinal.toFixed(2));