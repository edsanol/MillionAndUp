import {CryptoService} from '../../domain/services/cryptoService';
import {TickerResponseApi} from '../api/models/tickerResponseApi';
import {HttpClient} from '../api/http';
import {CryptoModel} from '../../domain/models/CryptoModel';

/**
 * Implementación concreta del servicio CryptoService.
 * Esta clase utiliza un cliente HTTP para realizar solicitudes a la API y obtener datos de criptomonedas.
 */
export class CryptoServiceImpl implements CryptoService {
  /**
   * Constructor de la clase CryptoServiceImpl.
   * @param {HttpClient} http - El cliente HTTP utilizado para realizar solicitudes a la API.
   */
  constructor(private http: HttpClient) {}

  /**
   * Método para obtener todas las criptomonedas desde la API.
   * @param {string} urlQuery - La cadena de consulta utilizada para obtener las criptomonedas (puede contener filtros, paginación, etc.).
   * @returns {Promise<CryptoModel[]>} - Una promesa que resuelve a una matriz de objetos CryptoModel que representan las criptomonedas.
   */
  async getAllCryptos(urlQuery: string): Promise<CryptoModel[]> {
    // Realizar una solicitud HTTP a la API utilizando el cliente HTTP
    const data = await this.http.get<TickerResponseApi<CryptoModel[]>>(
      urlQuery,
    );

    // Mapear los datos de la respuesta API a objetos CryptoModel
    return data.data.map(crypto => CryptoModel.fromJson(crypto));
  }
}
