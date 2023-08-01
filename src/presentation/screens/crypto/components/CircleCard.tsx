import {View, Text, Image} from 'react-native';
import React from 'react';
import cryptoStyles from '../styles';
import {SharedElement} from 'react-navigation-shared-element';
import {Crypto} from '../../../../domain/entities/Crypto';

/**
 * Propiedades del componente CircleCard.
 */
interface CircleCardProps {
  item: Crypto | undefined; // Objeto que representa la información de una criptomoneda o undefined si no hay información disponible.
}

/**
 * Componente funcional que muestra una tarjeta circular con información básica de una criptomoneda.
 * @param {CircleCardProps} props - Propiedades del componente CircleCard.
 * @returns {React.ReactNode} Elemento de React que representa la tarjeta circular con información básica de la criptomoneda.
 */
const CircleCard = ({item}: CircleCardProps): React.ReactNode => {
  return (
    <View style={cryptoStyles.circleCard}>
      {/* Elemento compartido para la animación de transición de imagen */}
      <SharedElement id={`item.${item?.id}.photo`}>
        <Image
          source={{
            uri: `${item?.imageUrl()}`,
          }}
          style={cryptoStyles.imageStyle}
        />
      </SharedElement>
      {/* Elemento compartido para la animación de transición del nombre */}
      <SharedElement id={`item.${item?.id}.name`}>
        <Text style={cryptoStyles.cryptoNameText}>{item?.name}</Text>
      </SharedElement>
      {/* Elemento compartido para la animación de transición del símbolo */}
      <SharedElement id={`item.${item?.id}.symbol`}>
        <Text style={cryptoStyles.cryptoSymbolText}>{item?.symbol}</Text>
      </SharedElement>
    </View>
  );
};

export default CircleCard;
