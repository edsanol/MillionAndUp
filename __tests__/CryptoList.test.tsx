import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CryptoList from '../src/presentation/screens/home/components/CryptoList';
import {Crypto} from '../src/domain/entities/Crypto';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../src/presentation/navigation/StackNavigation';

describe('CryptoList', () => {
  let navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  beforeEach(() => {
    navigation = {
      navigate: jest.fn(),
      goBack: jest.fn(),
      dispatch: jest.fn(),
      setOptions: jest.fn(),
      reset: jest.fn(),
      canGoBack: jest.fn(),
      isFocused: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      setParams: jest.fn(),
      getId: jest.fn(),
      getState: jest.fn(),
      getParent: jest.fn(),
      replace: jest.fn(),
      push: jest.fn(),
      pop: jest.fn(),
      popToTop: jest.fn(),
    };
  });

  it('should render cryptos correctly', () => {
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

    const {getByTestId} = render(
      <CryptoList
        cryptos={cryptos}
        navigation={navigation}
        loadMoreCryptos={() => {}}
        search=""
      />,
    );

    const bitcoinPhoto = getByTestId('item.1.photo');
    const bitcoinName = getByTestId('item.1.name');
    const bitcoinPrice = getByTestId('item.1.price');
    const bitcoinSymbol = getByTestId('item.1.symbol');
    const ethereumPhoto = getByTestId('item.2.photo');
    const ethereumName = getByTestId('item.2.name');
    const ethereumPrice = getByTestId('item.2.price');
    const ethereumSymbol = getByTestId('item.2.symbol');

    expect(bitcoinPhoto).toBeDefined();
    expect(bitcoinName).toBeDefined();
    expect(bitcoinPrice).toBeDefined();
    expect(bitcoinSymbol).toBeDefined();
    expect(ethereumPhoto).toBeDefined();
    expect(ethereumName).toBeDefined();
    expect(ethereumPrice).toBeDefined();
    expect(ethereumSymbol).toBeDefined();
  });

  it('should call navigation.navigate when a crypto item is pressed', () => {
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

    const {getByTestId} = render(
      <CryptoList
        cryptos={cryptos}
        navigation={navigation}
        loadMoreCryptos={() => {}}
        search=""
      />,
    );

    const bitcoinText = getByTestId('item.1.name');
    fireEvent.press(bitcoinText);

    expect(navigation.navigate).toHaveBeenCalledWith('Crypto', {
      item: cryptos[0],
    });
  });

  it('should call loadMoreCryptos when onEndReached is triggered', () => {
    const cryptos: Crypto[] = Array.from({length: 100}, (_, index) => ({
      id: index.toString(),
      symbol: `SYM${index}`,
      name: `Crypto ${index}`,
      rank: index + 1,
      priceUSD: '1',
      percentChange24h: '1',
      percentChange1h: '1',
      percentChange7d: '1',
      priceBTC: '1',
      imageUrl() {
        return 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579';
      },
    }));

    const loadMoreCryptosMock = jest.fn();

    const {getByTestId} = render(
      <CryptoList
        cryptos={cryptos}
        navigation={navigation}
        loadMoreCryptos={loadMoreCryptosMock}
        search=""
      />,
    );

    const cryptoList = getByTestId('cryptoList');
    fireEvent(cryptoList, 'onEndReached');
    expect(loadMoreCryptosMock).toHaveBeenCalled();
  });
});
