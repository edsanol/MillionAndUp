import {Crypto} from '../../../domain/entities/Crypto';
import {CryptoActions} from '../actions/cryptoActions';
import {CryptoActionsType} from '../enums/cryptoActionsEnum';

/**
 * Interfaz que define el estado de las criptomonedas en la aplicación.
 */
export interface CryptoState {
  loading: boolean; // Indica si se están cargando las criptomonedas.
  cryptos: Crypto[]; // Lista de criptomonedas disponibles en el estado.
  error: any; // Almacena el mensaje de error en caso de que ocurra algún error relacionado con las criptomonedas.
}

/**
 * Estado inicial de las criptomonedas.
 */
const initialState: CryptoState = {
  loading: false,
  cryptos: [],
  error: null,
};

/**
 * Reductor para manejar las acciones relacionadas con las criptomonedas y actualizar el estado correspondiente.
 * @param {CryptoState} state - Estado actual de las criptomonedas.
 * @param {CryptoActions} action - Acción que indica la operación a realizar y su carga útil.
 * @returns {CryptoState} Nuevo estado de las criptomonedas después de la operación.
 */
export default function cryptoReducer(
  state: CryptoState = initialState,
  action: CryptoActions,
): CryptoState {
  switch (action.type) {
    case CryptoActionsType.GET_CRYPTOS:
      return {
        ...state,
        loading: true,
      };

    case CryptoActionsType.ADD_CRYPTOS:
      return {
        ...state,
        loading: true,
      };

    case CryptoActionsType.GET_CRYPTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        cryptos: action.payload,
      };

    case CryptoActionsType.ADD_CRYPTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        cryptos: [...state.cryptos, ...action.payload],
      };

    case CryptoActionsType.GET_CRYPTOS_ERROR:
    case CryptoActionsType.ADD_CRYPTOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
