class Combustivel {
    tipo: string;
    preco: number;
  
    constructor(tipo: string, preco: number) {
      this.tipo = tipo;
      this.preco = preco;
    }
  }
  
  const GASOLINA = "GASOLINA";
  const ETANOL = "ETANOL";
  
  export { Combustivel, GASOLINA, ETANOL };
  