// Solicita o valor da compra
let valorCompra = parseFloat(prompt("Digite o valor da compra: R$"));

if (isNaN(valorCompra) || valorCompra <= 0) {
    alert("Valor inválido!");
} else {

    // Escolha da região
    let regiao = prompt(
        "Escolha a região de entrega:\n" +
        "1 - Sul\n" +
        "2 - Sudeste\n" +
        "3 - Outras"
    );

    let frete = 0;

    // Regra de frete grátis
    if (valorCompra > 250) {
        frete = 0;
    } else {
        switch (regiao) {
            case '1':
                frete = 20;
                break;
            case '2':
                frete = 10;
                break;
            case '3':
                frete = 30;
                break;
            default:
                alert("Região inválida!");
                break;
        }
    }

    let total = valorCompra + frete;

    // Exibe resultado
    alert(
        `Valor da compra: R$ ${valorCompra.toFixed(2)}\n` +
        `Frete: R$ ${frete.toFixed(2)}\n` +
        `Total a pagar: R$ ${total.toFixed(2)}`
    );
}