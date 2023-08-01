import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import Home from '../src/presentation/screens/home';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../src/presentation/navigation/StackNavigation';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Store, AnyAction} from 'redux';

jest.mock('../src/presentation/screens/home/ViewModel', () => () => ({
  cryptos: [],
  loading: false,
  error: null,
  search: '',
  handleSearch: jest.fn(),
  loadMoreCryptos: jest.fn(),
}));

jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('@react-navigation/elements', () => ({
  useHeaderHeight: jest.fn().mockImplementation(() => 200),
}));

const mockStore = configureMockStore([]);

describe('Home Component', () => {
  let navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  let route: RouteProp<RootStackParamList, keyof RootStackParamList>;
  let store: Store<unknown, AnyAction>;

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

    route = {
      key: 'test-route',
      name: 'Home',
    };

    store = mockStore({
      cryptoReducer: {
        cryptos: [],
        loading: false,
        error: null,
      },
    });
  });

  it('should render without errors', () => {
    const {getByPlaceholderText, getByText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <Home navigation={navigation} route={route} />
        </NavigationContainer>
      </Provider>,
    );

    const searchInput = getByPlaceholderText('Search');
    const millionAndUpText = getByText('Million And Up Crypto');

    expect(searchInput).toBeDefined();
    expect(millionAndUpText).toBeDefined();
  });

  it('should render cryptoList', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <Home navigation={navigation} route={route} />
        </NavigationContainer>
      </Provider>,
    );

    const loadingIndicator = getByTestId('cryptoList');

    expect(loadingIndicator).toBeDefined();
  });
});
