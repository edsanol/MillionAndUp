import {CryptoModel} from '../models/CryptoModel';

export interface CryptoService {
  getAllCryptos(urlQuery: string): Promise<CryptoModel[]>;
}
