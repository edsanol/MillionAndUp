import {View} from 'react-native';
import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/StackNavigation';
import HeaderTitleCustom from '../../components/HeaderTitleCustom';
import cryptoStyles from './styles';
import CircleCard from './components/CircleCard';
import PriceCard from './components/PriceCard';

/**
 * Propiedades del componente CryptoView.
 */
interface CryptoProps extends StackScreenProps<RootStackParamList> {}

/**
 * Componente funcional que muestra la vista detallada de una criptomoneda.
 * @param {CryptoProps} props - Propiedades del componente CryptoView.
 * @returns {React.ReactNode} Elemento de React que representa la vista detallada de una criptomoneda.
 */
const CryptoView = ({route, navigation}: CryptoProps): React.ReactNode => {
  // Obtiene el objeto de criptomoneda del parámetro de ruta.
  const item = route.params?.item;

  /**
   * Efecto que se ejecuta al montar el componente para actualizar la opción del título de la pantalla de navegación.
   * Utiliza el componente personalizado "HeaderTitleCustom" para mostrar un título personalizado con la información de la criptomoneda.
   */
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <HeaderTitleCustom item={item} />,
    });
  }, []);

  return (
    <View style={cryptoStyles.mainContainer}>
      {/* Separador */}
      <View style={cryptoStyles.separator} />

      {/* Componente CircleCard que muestra información básica de la criptomoneda */}
      <CircleCard item={item} />

      {/* Componente PriceCard que muestra información de precios de la criptomoneda */}
      <PriceCard item={item} />
    </View>
  );
};

export default CryptoView;
