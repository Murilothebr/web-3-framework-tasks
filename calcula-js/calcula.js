document.addEventListener("DOMContentLoaded", function () {
    const calcularBtn = document.getElementById("calcularBtn");
    const resultadoDiv = document.getElementById("resultado");
  
    calcularBtn.addEventListener("click", function () {
      const resultado = calcularSoma(1, 100);
      window.alert("a soma dos numeros de 1 a 100 é: " + resultado);
    });
  });
  
  function calcularSoma(inicio, fim) {
    let soma = 0;
    for (let i = inicio; i <= fim; i++) {
      soma += i;
    }
    return soma;
  }
  