import {View, Text, Image} from 'react-native';
import React from 'react';
import {Crypto} from '../../domain/entities/Crypto';

/**
 * Propiedades del componente HeaderTitleCustom.
 * @interface HeaderTitleCustomProps
 * @property {Crypto | undefined} item - La información de la criptomoneda para mostrar en el título.
 */
interface HeaderTitleCustomProps {
  item: Crypto | undefined;
}

/**
 * Componente que muestra un título personalizado para la barra de navegación.
 * El título consiste en el logotipo de la criptomoneda (imagen) seguido de su símbolo.
 * @param {HeaderTitleCustomProps} props - Las propiedades del componente.
 * @param {Crypto | undefined} props.item - La información de la criptomoneda para mostrar en el título.
 * @returns {React.ReactNode} Elemento de React que representa el título personalizado.
 */
const HeaderTitleCustom = ({item}: HeaderTitleCustomProps): React.ReactNode => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Image
        source={{
          uri: `${item?.imageUrl()}`,
        }}
        style={{width: 48, height: 48, resizeMode: 'contain'}}
      />
      <Text
        style={{
          fontSize: 22,
          color: '#fff',
          paddingLeft: 12,
          fontWeight: '600',
        }}>
        {item?.symbol}
      </Text>
    </View>
  );
};

export default HeaderTitleCustom;
