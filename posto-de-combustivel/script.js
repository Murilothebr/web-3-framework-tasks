class Combustivel {
    constructor(tipo, preco) {
      this.tipo = tipo;
      this.preco = preco;
    }
  }
  
  const GASOLINA = "GASOLINA";
  const ETANOL = "ETANOL";

  class Posto {
    constructor(nome, precoGasolina, precoEtanol) {
      this.nome = nome;
      this.gasolina = new Combustivel(GASOLINA, precoGasolina);
      this.etanol = new Combustivel(ETANOL, precoEtanol);
    }
    
    sugereCombustivel() {
      const proporcao = this.etanol.preco / this.gasolina.preco;
  
      if (proporcao < 0.7) {
        return `No posto ${this.nome}, é vantajoso abastecer com ETANOL. A proporção calculada é: ${proporcao.toFixed(2)}`;
      } else {
        return `No posto ${this.nome}, não é vantajoso abastecer com ETANOL. A proporção calculada é: ${proporcao.toFixed(2)}`;
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const resultadoDiv = document.getElementById("resultado");
  
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();
    });
  
    const calcularBtn = document.getElementById("calcularBtn");
    calcularBtn.addEventListener("click", function () {
      const precoEtanol = parseFloat(document.getElementById("precoEtanol").value);
      const precoGasolina = parseFloat(document.getElementById("precoGasolina").value);
      const nomePosto = document.getElementById("nomePosto").value;

      const posto = new Posto(nomePosto, precoGasolina, precoEtanol);
      const sugestao = posto.sugereCombustivel();
  
      resultadoDiv.textContent = sugestao;
    });
  });
  