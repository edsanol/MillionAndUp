import {View, Text} from 'react-native';
import React from 'react';
import cryptoStyles from '../styles';
import {SharedElement} from 'react-navigation-shared-element';
import {Crypto} from '../../../../domain/entities/Crypto';

/**
 * Propiedades del componente PriceCard.
 */
interface PriceCardProps {
  item: Crypto | undefined;
}

/**
 * Componente funcional que muestra una tarjeta con la información del precio de una criptomoneda.
 * @param {PriceCardProps} props - Propiedades del componente PriceCard.
 * @returns {React.ReactNode} Elemento de React que representa la tarjeta con la información del precio de la criptomoneda.
 */
const PriceCard = ({item}: PriceCardProps): React.ReactNode => {
  return (
    <View style={cryptoStyles.priceCard}>
      {/* Elemento compartido para la animación de transición del precio */}
      <SharedElement id={`item.${item?.id}.price`}>
        <Text style={cryptoStyles.priceText}>{`$ ${item?.priceUSD} USD`}</Text>
      </SharedElement>
      <View style={cryptoStyles.percentsContainer}>
        <Text
          style={{
            ...cryptoStyles.percentText,
            // Si el porcentaje de cambio es positivo, se muestra en verde, de lo contrario en rojo.
            color:
              (item?.percentChange1h || '').split('-')[0] !== ''
                ? '#00FF00'
                : '#FF0000',
          }}>{`${item?.percentChange1h}% 1H`}</Text>
        <Text
          style={{
            ...cryptoStyles.percentText,
            // Si el porcentaje de cambio es positivo, se muestra en verde, de lo contrario en rojo.
            color:
              (item?.percentChange24h || '').split('-')[0] !== ''
                ? '#00FF00'
                : '#FF0000',
          }}>{`${item?.percentChange24h}% 1D`}</Text>
        <Text
          style={{
            ...cryptoStyles.percentText,
            // Si el porcentaje de cambio es positivo, se muestra en verde, de lo contrario en rojo.
            color:
              (item?.percentChange7d || '').split('-')[0] !== ''
                ? '#00FF00'
                : '#FF0000',
          }}>{`${item?.percentChange7d}% 7D`}</Text>
      </View>
    </View>
  );
};

export default PriceCard;
