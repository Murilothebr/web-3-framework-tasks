class Posto {
    constructor(nome, precoGasolina, precoEtanol) {
      this.nome = nome;
      this.gasolina = new Combustivel(GASOLINA, precoGasolina);
      this.etanol = new Combustivel(ETANOL, precoEtanol);
    }
}