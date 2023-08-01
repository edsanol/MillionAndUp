import {Crypto} from '../../domain/entities/Crypto';
import {CryptoModel} from '../../domain/models/CryptoModel';
import {CryptoRepository} from '../../domain/repositories/cryptoRepository';
import {CryptoService} from '../../domain/services/cryptoService';

/**
 * Implementación concreta del repositorio CryptoRepository.
 * Esta clase utiliza el servicio CryptoService para obtener datos de criptomonedas y luego mapea esos datos a objetos de dominio Crypto.
 */
export class CryptoRepositoryImpl implements CryptoRepository {
  /**
   * Constructor de la clase CryptoRepositoryImpl.
   * @param {CryptoService} service - El servicio CryptoService utilizado para obtener datos de criptomonedas.
   */
  constructor(private service: CryptoService) {}

  /**
   * Método para obtener todas las criptomonedas desde el servicio.
   * @param {string} urlQuery - La cadena de consulta utilizada para obtener las criptomonedas (puede contener filtros, paginación, etc.).
   * @returns {Promise<Crypto[]>} - Una promesa que resuelve a una matriz de objetos Crypto de dominio.
   */
  async getAllCryptos(urlQuery: string): Promise<Crypto[]> {
    // Obtener datos de criptomonedas desde el servicio CryptoService
    const cryptos: CryptoModel[] = await this.service.getAllCryptos(urlQuery);

    // Mapear los datos del modelo a objetos de dominio Crypto
    return cryptos.map(crypto => crypto.toDomain());
  }
}
