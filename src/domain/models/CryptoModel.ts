import {Crypto} from '../entities/Crypto';

/**
 * Interfaz que define los parámetros para construir un objeto CryptoModel.
 */
export type ConstructorParams = {
  id: string;
  symbol: string;
  name: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  price_btc: string;
};

/**
 * Clase que representa un modelo de criptomoneda (CryptoModel).
 * Esta clase se utiliza para mapear y transformar datos del servicio a un objeto Crypto.
 */
export class CryptoModel {
  public id: string;
  public symbol: string;
  public name: string;
  public rank: number;
  public price_usd: string;
  public percent_change_24h: string;
  public percent_change_1h: string;
  public percent_change_7d: string;
  public price_btc: string;

  /**
   * Constructor de la clase CryptoModel.
   * @param {ConstructorParams} params - Los parámetros necesarios para crear una instancia de CryptoModel.
   */
  constructor({
    id,
    symbol,
    name,
    rank,
    price_usd,
    percent_change_24h,
    percent_change_1h,
    percent_change_7d,
    price_btc,
  }: ConstructorParams) {
    this.id = id;
    this.symbol = symbol;
    this.name = name;
    this.rank = rank;
    this.price_usd = price_usd;
    this.percent_change_24h = percent_change_24h;
    this.percent_change_1h = percent_change_1h;
    this.percent_change_7d = percent_change_7d;
    this.price_btc = price_btc;
  }

  /**
   * Método estático para crear una instancia de CryptoModel a partir de un objeto JSON.
   * @param {ConstructorParams} json - El objeto JSON que contiene los datos de la criptomoneda.
   * @returns {CryptoModel} - Una nueva instancia de CryptoModel.
   */
  public static fromJson(json: ConstructorParams): CryptoModel {
    return new CryptoModel(json);
  }

  /**
   * Método para convertir el modelo de criptomoneda (CryptoModel) a un objeto de dominio Crypto.
   * @returns {Crypto} - El objeto de dominio Crypto resultante.
   */
  public toDomain(): Crypto {
    return new Crypto({
      id: this.id,
      symbol: this.symbol,
      name: this.name,
      rank: this.rank,
      priceUSD: this.price_usd,
      percentChange24h: this.percent_change_24h,
      percentChange1h: this.percent_change_1h,
      percentChange7d: this.percent_change_7d,
      priceBTC: this.price_btc,
    });
  }
}
