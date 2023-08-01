import {Crypto} from '../../../domain/entities/Crypto';
import {CryptoActionsType} from '../enums/cryptoActionsEnum';

export interface GetCryptos {
  type: CryptoActionsType.GET_CRYPTOS;
}

export interface GetCryptosSuccess {
  type: CryptoActionsType.GET_CRYPTOS_SUCCESS;
  payload: Crypto[];
}

export interface GetCryptosError {
  type: CryptoActionsType.GET_CRYPTOS_ERROR;
  payload: any;
}

export interface AddCryptos {
  type: CryptoActionsType.ADD_CRYPTOS;
}

export interface AddCryptosSuccess {
  type: CryptoActionsType.ADD_CRYPTOS_SUCCESS;
  payload: Crypto[];
}

export interface AddCryptosError {
  type: CryptoActionsType.ADD_CRYPTOS_ERROR;
  payload: any;
}
