import {Crypto} from '../entities/Crypto';
import {CryptoRepository} from '../repositories/cryptoRepository';

/**
 * Caso de uso (Use Case) para obtener todas las criptomonedas.
 * Este caso de uso se utiliza para obtener una lista de todas las criptomonedas desde el repositorio.
 */
export class GetAllCryptosUseCase {
  /**
   * Constructor del caso de uso GetAllCryptosUseCase.
   * @param {CryptoRepository} repository - El repositorio de criptomonedas utilizado para obtener los datos.
   */
  constructor(private repository: CryptoRepository) {}

  /**
   * Método para ejecutar el caso de uso.
   * @param {string} urlQuery - La cadena de consulta utilizada para obtener las criptomonedas (puede contener filtros, paginación, etc.).
   * @returns {Promise<Crypto[]>} - Una promesa que resuelve a los datos de las criptomonedas obtenidos desde el repositorio.
   */
  async execute(urlQuery: string): Promise<Crypto[]> {
    return await this.repository.getAllCryptos(urlQuery);
  }
}
