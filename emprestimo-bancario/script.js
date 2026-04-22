let salario = parseFloat(prompt("Digite o seu salário: R$"));
let parcela = parseFloat(prompt("Digite o valor da parcela desejada: R$"));

if (isNaN(salario) || salario <= 0 || isNaN(parcela) || parcela <= 0) {
    alert("Valores inválidos!");
} else {

    let limite = salario * 0.30;

    if (parcela > limite) {
        alert("Empréstimo Negado: Parcela muito alta");
    } else {
        alert("Empréstimo Pré-aprovado");
    }
}