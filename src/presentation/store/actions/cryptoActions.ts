import {Dispatch} from 'redux';
import {
  AddCryptos,
  AddCryptosError,
  AddCryptosSuccess,
  GetCryptos,
  GetCryptosError,
  GetCryptosSuccess,
} from '../interfaces/cryptoActionsInterface';
import {useCase} from '../../../config/dependencies';
import {CryptoActionsType} from '../enums/cryptoActionsEnum';

/**
 * Tipo de acciones disponibles para las operaciones relacionadas con las criptomonedas.
 */
export type CryptoActions =
  | GetCryptos
  | GetCryptosSuccess
  | GetCryptosError
  | AddCryptos
  | AddCryptosSuccess
  | AddCryptosError;

/**
 * Acción para obtener las criptomonedas.
 * @param {string} urlQuery - Consulta de URL para obtener las criptomonedas.
 * @returns {Function} Función asincrónica que se ejecuta con el middleware Redux Thunk.
 */
export const getCryptos = (urlQuery: string): Function => {
  return async (dispatch: Dispatch<CryptoActions>) => {
    // Dispatch para indicar que se está realizando la solicitud de obtener criptomonedas.
    dispatch({type: CryptoActionsType.GET_CRYPTOS});

    try {
      // Obtener las criptomonedas utilizando el caso de uso definido en "useCase".
      const cryptos = await useCase.execute(urlQuery);
      // Dispatch para indicar que se han obtenido las criptomonedas con éxito y pasar el resultado como carga útil.
      dispatch({
        type: CryptoActionsType.GET_CRYPTOS_SUCCESS,
        payload: cryptos,
      });
    } catch (error: any) {
      // Dispatch para indicar que ocurrió un error al obtener las criptomonedas y pasar el mensaje de error como carga útil.
      dispatch({
        type: CryptoActionsType.GET_CRYPTOS_ERROR,
        payload: error.message,
      });
    }
  };
};

/**
 * Acción para agregar criptomonedas adicionales.
 * @param {string} urlQuery - Consulta de URL para obtener las criptomonedas adicionales.
 * @returns {Function} Función asincrónica que se ejecuta con el middleware Redux Thunk.
 */
export const addCryptos = (urlQuery: string): Function => {
  return async (dispatch: Dispatch<CryptoActions>) => {
    // Dispatch para indicar que se está realizando la solicitud de agregar criptomonedas.
    dispatch({type: CryptoActionsType.ADD_CRYPTOS});

    try {
      // Obtener las criptomonedas adicionales utilizando el caso de uso definido en "useCase".
      const cryptos = await useCase.execute(urlQuery);

      // Dispatch para indicar que se han agregado las criptomonedas con éxito y pasar el resultado como carga útil.
      dispatch({
        type: CryptoActionsType.ADD_CRYPTOS_SUCCESS,
        payload: cryptos,
      });
    } catch (error: any) {
      // Dispatch para indicar que ocurrió un error al agregar las criptomonedas y pasar el mensaje de error como carga útil.
      dispatch({
        type: CryptoActionsType.ADD_CRYPTOS_ERROR,
        payload: error.message,
      });
    }
  };
};
