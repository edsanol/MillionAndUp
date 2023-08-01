/**
 * @format
 * @flow
 */

import {
  StatusBar,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import HomeViewModel from './ViewModel';
import LinearGradient from 'react-native-linear-gradient';
import {useHeaderHeight} from '@react-navigation/elements';
import homeStyles from './styles';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/StackNavigation';
import CryptoList from './components/CryptoList';
import CryptoSearch from './components/CryptoSearch';

/**
 * Propiedades de la pantalla de inicio.
 */
interface HomeProps extends StackScreenProps<RootStackParamList> {}

/**
 * Componente funcional que representa la pantalla de inicio de la aplicación.
 * Muestra una lista de criptomonedas y un campo de búsqueda para filtrarlas.
 *
 * @param {HomeProps} props - Propiedades de la pantalla de inicio. En este caso se trata de las propiedades de navegación.
 * @returns {React.ReactNode} Elemento de React que representa la pantalla de inicio.
 */
const Home = ({navigation}: HomeProps): React.ReactNode => {
  /**
   * ViewModel para gestionar los datos y la lógica de la pantalla de inicio.
   * @see {@link ./ViewModel}
   */
  const {cryptos, loading, error, search, handleSearch, loadMoreCryptos} =
    HomeViewModel();
  /**
   * Altura del encabezado de navegación para evitar solapamiento con el teclado en iOS.
   */
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={homeStyles.flexContainer}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'light-content' : 'default'}
      />
      <KeyboardAvoidingView
        style={homeStyles.flexContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? headerHeight : 0}>
        <LinearGradient
          colors={['#1D006B', '#5917D7']}
          style={homeStyles.flexContainer}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <CryptoSearch search={search} handleSearch={handleSearch} />
          <CryptoList
            cryptos={cryptos}
            navigation={navigation}
            loadMoreCryptos={loadMoreCryptos}
            search={search}
          />
        </LinearGradient>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Home;
