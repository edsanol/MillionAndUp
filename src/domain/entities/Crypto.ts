/**
 * Interfaz que define los parámetros para construir un objeto Crypto.
 */
type constructorParams = {
  id: string;
  symbol: string;
  name: string;
  rank: number;
  priceUSD: string;
  percentChange24h: string;
  percentChange1h: string;
  percentChange7d: string;
  priceBTC: string;
};

/**
 * Clase que representa una criptomoneda (Crypto).
 */
export class Crypto {
  public id: string;
  public symbol: string;
  public name: string;
  public rank: number;
  public priceUSD: string;
  public percentChange24h: string;
  public percentChange1h: string;
  public percentChange7d: string;
  public priceBTC: string;

  /**
   * Constructor de la clase Crypto.
   * @param {constructorParams} params - Los parámetros necesarios para crear una instancia de Crypto.
   */
  constructor({
    id,
    symbol,
    name,
    rank,
    priceUSD,
    percentChange24h,
    percentChange1h,
    percentChange7d,
    priceBTC,
  }: constructorParams) {
    this.id = id;
    this.symbol = symbol;
    this.name = name;
    this.rank = rank;
    this.priceUSD = priceUSD;
    this.percentChange24h = percentChange24h;
    this.percentChange1h = percentChange1h;
    this.percentChange7d = percentChange7d;
    this.priceBTC = priceBTC;
  }

  /**
   * Método que devuelve la URL del logotipo de la criptomoneda en función de su símbolo.
   * @returns {string} - La URL del logotipo de la criptomoneda.
   */
  imageUrl(): string {
    return `https://assets.coincap.io/assets/icons/${this.symbol.toLowerCase()}@2x.png`;
  }
}
