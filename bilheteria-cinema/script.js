// Preço padrão
let preco = 40;

// Solicita dados
let idade = parseInt(prompt("Digite sua idade:"));
let estudante = prompt("Você é estudante? (sim/não)");

// Validação
if (isNaN(idade) || idade <= 0) {
    alert("Idade inválida!");
} else {

    // Regra de desconto
    if (idade < 12 || idade > 60 || estudante.toLowerCase() === "sim") {
        preco = 20;
    }

    // Exibe resultado
    alert(`Valor do ingresso: R$ ${preco.toFixed(2)}`);
}