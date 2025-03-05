function comprar() {
  let tipoIngresso = document.getElementById("tipo-ingresso").value;
  let quantidade = document.getElementById("qtd").value;
  if (quantidade === "" || quantidade <= 0) {
    alert("Quantidade de ingressos inválida");
    document.getElementById("qtd").value = "";
    return;
  }

  if (tipoIngresso === "pista") {
    localCompra(quantidade, "qtd-pista");
  } else if (tipoIngresso === "superior") {
    localCompra(quantidade, "qtd-superior");
  } else {
    localCompra(quantidade, "qtd-inferior");
  }
  document.getElementById("qtd").value = "";
}

function localCompra(qtd, qtdLocal) {
  let quantidadeDisponivel = parseInt(
    document.getElementById(qtdLocal).textContent
  );
  if (quantidadeDisponivel < qtd) {
    alert("Quantidade indisponível");
  } else {
    quantidadeDisponivel -= qtd;

    document.getElementById(qtdLocal).textContent = `${quantidadeDisponivel}`;
  }
}
