import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {useCase} from '../src/config/dependencies';
import {
  addCryptos,
  getCryptos,
} from '../src/presentation/store/actions/cryptoActions';
import {CryptoActionsType} from '../src/presentation/store/enums/cryptoActionsEnum';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Crypto Actions', () => {
  it('should dispatch GET_CRYPTOS_SUCCESS after successfully getting cryptos', async () => {
    const mockCryptos = [{id: 1, name: 'Bitcoin', price: 50000}];
    useCase.execute = jest.fn().mockResolvedValue(mockCryptos);
    const store = mockStore({});
    await store.dispatch<any>(getCryptos('query'));
    const actions = store.getActions();

    expect(actions).toEqual([
      {type: CryptoActionsType.GET_CRYPTOS},
      {type: CryptoActionsType.GET_CRYPTOS_SUCCESS, payload: mockCryptos},
    ]);
  });

  it('should dispatch GET_CRYPTOS_ERROR if getting cryptos fails', async () => {
    const errorMessage = 'Error fetching cryptos';
    useCase.execute = jest.fn().mockRejectedValue(new Error(errorMessage));
    const store = mockStore({});
    await store.dispatch<any>(getCryptos('query'));
    const actions = store.getActions();

    expect(actions).toEqual([
      {type: CryptoActionsType.GET_CRYPTOS},
      {type: CryptoActionsType.GET_CRYPTOS_ERROR, payload: errorMessage},
    ]);
  });

  it('should dispatch ADD_CRYPTOS_SUCCESS after successfully adding cryptos', async () => {
    const mockCryptos = [{id: 1, name: 'Ethereum', price: 3000}];
    useCase.execute = jest.fn().mockResolvedValue(mockCryptos);
    const store = mockStore({});
    await store.dispatch<any>(addCryptos('query'));
    const actions = store.getActions();

    expect(actions).toEqual([
      {type: CryptoActionsType.ADD_CRYPTOS},
      {type: CryptoActionsType.ADD_CRYPTOS_SUCCESS, payload: mockCryptos},
    ]);
  });

  it('should dispatch ADD_CRYPTOS_ERROR if adding cryptos fails', async () => {
    const errorMessage = 'Error adding cryptos';
    useCase.execute = jest.fn().mockRejectedValue(new Error(errorMessage));
    const store = mockStore({});
    await store.dispatch<any>(addCryptos('query'));
    const actions = store.getActions();

    expect(actions).toEqual([
      {type: CryptoActionsType.ADD_CRYPTOS},
      {type: CryptoActionsType.ADD_CRYPTOS_ERROR, payload: errorMessage},
    ]);
  });
});
