document.addEventListener("DOMContentLoaded", function () {
    const caixaForm = document.getElementById("caixaForm");
    const resultadoDiv = document.getElementById("resultado");
  
    caixaForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const valorSaque = parseInt(caixaForm.valor.value);
  
      if (valorSaque >= 10 && valorSaque <= 600) {
        const notas = calcularNotas(valorSaque);
        mostrarResultado(notas, resultadoDiv);
      } else {
        window.alert("Valor de saque inválido. O valor deve estar entre 10 e 600 reais") ;
      }
    });
  });
  
  function calcularNotas(valor) {
    const notasDisponiveis = [100, 50, 20, 10, 5, 2];
    const notas = {};
  
    for (const nota of notasDisponiveis) {
      if (valor >= nota) {
        const quantidade = Math.floor(valor / nota);
        notas[nota] = quantidade;
        valor -= quantidade * nota;
      }
    }
  
    return notas;
  }
  
  function mostrarResultado(notas, resultadoDiv) {
    resultadoDiv.innerHTML = "<h2>Notas fornecidas:</h2>";
  
    for (const nota in notas) {
      resultadoDiv.innerHTML += `${notas[nota]} nota(s) de ${nota} reais<br>`;
    }
  }
  