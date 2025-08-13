function Pagamento(){
    const pagamento = document.getElementById("pagamento").value;
    const resultado = document.getElementById("resultado");

    if (pagamento > 1000) {
        resultado.innerHTML = "Saldo insuficiente";
    } else {
        resultado.innerHTML = "Pagamento Aprovado!";
    }
}