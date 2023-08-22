import { Combustivel, GASOLINA, ETANOL } from './Combustivel';

class Posto {
  nome: string;
  gasolina: Combustivel;
  etanol: Combustivel;

  constructor(nome: string, precoGasolina: number, precoEtanol: number) {
    this.nome = nome;
    this.gasolina = new Combustivel(GASOLINA, precoGasolina);
    this.etanol = new Combustivel(ETANOL, precoEtanol);
  }

  sugereCombustivel(): void {
    const proporcao = this.etanol.preco / this.gasolina.preco;

    if (proporcao < 0.7) {
      console.log(`No posto ${this.nome}, é vantajoso abastecer com ETANOL. A proporção calculada é: ${proporcao.toFixed(2)}`);
    } else {
      console.log(`No posto ${this.nome}, não é vantajoso abastecer com ETANOL. A proporção calculada é: ${proporcao.toFixed(2)}`);
    }
  }
}

export default Posto;
