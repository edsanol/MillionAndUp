import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../src/presentation/store/store';
import HomeViewModel from '../src/presentation/screens/home/ViewModel';
import {Crypto} from '../src/domain/entities/Crypto';
import {waitFor} from '@testing-library/react-native';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const cryptos: Crypto[] = [
  {
    id: '1',
    symbol: 'BTC',
    name: 'Bitcoin',
    rank: 1,
    priceUSD: '1',
    percentChange24h: '1',
    percentChange1h: '1',
    percentChange7d: '1',
    priceBTC: '1',
    imageUrl() {
      return 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579';
    },
  },
];

const moreCryptos: Crypto[] = [
  {
    id: '2',
    symbol: 'ETH',
    name: 'Ethereum',
    rank: 2,
    priceUSD: '1',
    percentChange24h: '1',
    percentChange1h: '1',
    percentChange7d: '1',
    priceBTC: '1',
    imageUrl() {
      return 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579';
    },
  },
];

const initialState: RootState = {
  cryptoReducer: {
    cryptos: [],
    loading: false,
    error: null,
  },
};

const firstState: RootState = {
  cryptoReducer: {
    cryptos: cryptos,
    loading: false,
    error: null,
  },
};

const secondState: RootState = {
  cryptoReducer: {
    cryptos: [...cryptos, ...moreCryptos],
    loading: false,
    error: null,
  },
};

describe('HomeViewModel', () => {
  beforeAll(() => {
    const dispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(jest.fn());
  });

  beforeEach(() => {
    (useDispatch as jest.Mock).mockClear();
    (useSelector as jest.Mock).mockClear();
  });

  it('should load cryptos correctly', () => {
    (useSelector as jest.Mock).mockReturnValue(
      initialState.cryptoReducer.cryptos,
    );
    const {result} = renderHook(() => HomeViewModel());

    expect(result.current.cryptos).toEqual(initialState.cryptoReducer.cryptos);
  });

  it('should load loading correctly', () => {
    (useSelector as jest.Mock).mockReturnValue(
      initialState.cryptoReducer.loading,
    );
    const {result} = renderHook(() => HomeViewModel());

    expect(result.current.loading).toEqual(initialState.cryptoReducer.loading);
  });

  it('should load error correctly', () => {
    (useSelector as jest.Mock).mockReturnValue(
      initialState.cryptoReducer.error,
    );
    const {result} = renderHook(() => HomeViewModel());

    expect(result.current.error).toEqual(initialState.cryptoReducer.error);
  });

  it('should handle search correctly', () => {
    (useSelector as jest.Mock).mockReturnValue(initialState.cryptoReducer);
    const {result} = renderHook(() => HomeViewModel());

    act(() => {
      result.current.handleSearch('Bitcoin');
    });

    expect(result.current.search).toEqual('Bitcoin');
  });

  it('should load more cryptos correctly', async () => {
    (useSelector as jest.Mock).mockReturnValue(
      firstState.cryptoReducer.cryptos,
    );
    const {result} = renderHook(() => HomeViewModel());
    expect(result.current.cryptos).toEqual(cryptos);

    act(() => {
      result.current.loadMoreCryptos();
    });

    (useSelector as jest.Mock).mockReturnValue(
      secondState.cryptoReducer.cryptos,
    );

    const {result: updateResult} = renderHook(() => HomeViewModel());
    expect(updateResult.current.cryptos).toEqual([...cryptos, ...moreCryptos]);
  });

  it('should handle filter correctly', async () => {
    (useSelector as jest.Mock).mockReturnValue(
      secondState.cryptoReducer.cryptos,
    );
    const {result} = renderHook(() => HomeViewModel());
    expect(result.current.cryptos).toEqual([...cryptos, ...moreCryptos]);

    act(() => {
      result.current.handleSearch('Bitcoin');
    });

    expect(result.current.search).toEqual('Bitcoin');

    await waitFor(() => {
      expect(result.current.cryptos).toEqual(cryptos);
    });
  });
});
