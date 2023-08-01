import {
  TouchableOpacity,
  Animated,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import React, {useRef} from 'react';
import {Crypto} from '../../../../domain/entities/Crypto';
import homeStyles from '../styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/StackNavigation';
import CryptoListCard from './CryptoListCard';

/**
 * Propiedades del componente CryptoList.
 */
interface CryptoListProps {
  cryptos: Crypto[]; // Lista de criptomonedas a mostrar.
  navigation: StackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >; // Propiedad de navegación para redirigir a la pantalla "Crypto" al hacer clic en una criptomoneda.
  loadMoreCryptos: () => void; // Función para cargar más criptomonedas cuando se llega al final de la lista.
  search: string; // Texto de búsqueda para aplicar filtrado a la lista de criptomonedas.
}

/**
 * Componente funcional que muestra una lista animada de criptomonedas.
 * @param {CryptoListProps} props - Propiedades del componente CryptoList.
 * @returns {React.ReactNode} Elemento de React que representa la lista animada de criptomonedas.
 */
const CryptoList = ({
  cryptos,
  navigation,
  loadMoreCryptos,
  search,
}: CryptoListProps): React.ReactNode => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      testID={'cryptoList'}
      data={cryptos}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
      keyExtractor={(item, index) => (item.id + index).toString()}
      contentContainerStyle={{
        padding: 20,
        paddingTop: StatusBar.currentHeight || 42, // Agrega un espacio superior para evitar que se solapen elementos con la barra de estado.
      }}
      style={homeStyles.listContainer}
      renderItem={({item, index}) => {
        const inputRange = [-1, 0, 130.5 * index, 130.5 * (index + 1)]; // Rango de valores de desplazamiento para la animación de escala.
        const opacityRange = [-1, 0, 130.5 * index, 130.5 * (index + 0.8)]; // Rango de valores de desplazamiento para la animación de opacidad.

        // Animación de escala basada en el desplazamiento de la lista.
        const scale = scrollY.interpolate({
          inputRange,
          outputRange: [1, 1, 1, 0], // Escala completa (1) cuando el elemento está visible, escala a 0 cuando se desplaza fuera de la vista.
        });

        // Animación de opacidad basada en el desplazamiento de la lista.
        const opacity = scrollY.interpolate({
          inputRange: opacityRange,
          outputRange: [1, 1, 1, 0], // Opacidad completa (1) cuando el elemento está visible, opacidad a 0 cuando se desplaza fuera de la vista.
        });
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Crypto', {item})} // Navega a la pantalla "Crypto" y pasa la criptomoneda seleccionada como parámetro.
          >
            {/* Componente CryptoListCard que muestra una tarjeta con información de la criptomoneda. */}
            <CryptoListCard item={item} opacity={opacity} scale={scale} />
          </TouchableOpacity>
        );
      }}
      onEndReached={search === '' ? loadMoreCryptos : null} // Invoca la función "loadMoreCryptos" cuando se llega al final de la lista y no hay una búsqueda activa.
      onEndReachedThreshold={0.4} // Punto en la distancia a partir del cual se invoca la función "onEndReached".
      ListFooterComponent={
        // Componente de indicador de actividad que se muestra en la parte inferior de la lista al cargar más criptomonedas.
        cryptos.length < 100 && search === '' ? (
          <ActivityIndicator style={{height: 100}} size={20} color="grey" />
        ) : null
      }
    />
  );
};

export default CryptoList;
