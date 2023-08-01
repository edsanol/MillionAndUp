import {Crypto} from '../entities/Crypto';

export interface CryptoRepository {
  getAllCryptos(urlQuery: string): Promise<Crypto[]>;
}
