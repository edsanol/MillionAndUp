import {View, Text, TextInput} from 'react-native';
import React from 'react';
import homeStyles from '../styles';

/**
 * Propiedades del componente CryptoSearch.
 */
interface CryptoSearchProps {
  search: string;
  handleSearch: (text: string) => void;
}

/**
 * Componente funcional que muestra un campo de búsqueda para criptomonedas.
 * @param {CryptoSearchProps} props - Propiedades del componente CryptoSearch.
 * @returns {React.ReactNode} Elemento de React que representa el campo de búsqueda de criptomonedas.
 */
const CryptoSearch = ({
  search,
  handleSearch,
}: CryptoSearchProps): React.ReactNode => {
  return (
    <View style={homeStyles.mainCardContainer}>
      <Text style={homeStyles.titleText}>Million And Up Crypto</Text>
      {/* Campo de entrada de texto para realizar búsquedas */}
      <TextInput
        placeholder="Search"
        style={homeStyles.textInputStyle}
        onChangeText={handleSearch}
        value={search}
        testID="search-input"
      />
    </View>
  );
};

export default CryptoSearch;
