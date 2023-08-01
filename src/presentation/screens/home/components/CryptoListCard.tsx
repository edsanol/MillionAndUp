import {View, Text, Animated, Image} from 'react-native';
import React from 'react';
import homeStyles from '../styles';
import {SharedElement} from 'react-navigation-shared-element';
import {Crypto} from '../../../../domain/entities/Crypto';

/**
 * Propiedades del componente CryptoListCard.
 */
interface CryptoListInfoProps {
  item: Crypto;
  opacity: Animated.AnimatedInterpolation<string | number>;
  scale: Animated.AnimatedInterpolation<string | number>;
}

/**
 * Componente funcional que muestra la información de una criptomoneda en una tarjeta animada.
 * @param {CryptoListInfoProps} props - Propiedades del componente CryptoListCard.
 * @returns {React.ReactNode} Elemento de React que representa la tarjeta de información de la criptomoneda.
 */
const CryptoListCard = ({
  item,
  opacity,
  scale,
}: CryptoListInfoProps): React.ReactNode => {
  return (
    <Animated.View
      style={{
        ...homeStyles.cardsContainer,
        opacity,
        transform: [{scale}],
      }}>
      {/* Elemento compartido para la animación de transición de imagen */}
      <SharedElement id={`item.${item.id}.photo`}>
        <Image
          source={{
            uri: `${item?.imageUrl()}`,
          }}
          style={homeStyles.cardImage}
        />
      </SharedElement>
      <View>
        {/* Elemento compartido para la animación de transición del título */}
        <SharedElement id={`item.${item.id}.name`}>
          <Text style={homeStyles.cardTextTitle}>{item.name}</Text>
        </SharedElement>
        {/* Elemento compartido para la animación de transición del precio */}
        <SharedElement id={`item.${item.id}.price`}>
          <Text style={homeStyles.cardTextPrice}>
            {`$${item.priceUSD} USD`}
          </Text>
        </SharedElement>
        {/* Elemento compartido para la animación de transición del símbolo */}
        <SharedElement id={`item.${item.id}.symbol`}>
          <Text style={homeStyles.cardTextSymbol}>{item.symbol}</Text>
        </SharedElement>
      </View>
    </Animated.View>
  );
};

export default CryptoListCard;
