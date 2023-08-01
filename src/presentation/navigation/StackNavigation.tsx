import {View, StatusBar, Image} from 'react-native';
import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Home from '../screens/home';
import LinearGradient from 'react-native-linear-gradient';
import CryptoView from '../screens/crypto';
import {Crypto} from '../../domain/entities/Crypto';

// Definición de los parámetros de navegación para la pila de navegación.
export type RootStackParamList = {
  Home: undefined;
  Crypto: {item: Crypto};
};

// Crear una pila de navegación utilizando react-navigation-shared-element.
const Stack = createSharedElementStackNavigator<RootStackParamList>();

/**
 * Componente que define la estructura de navegación de la aplicación.
 * Utiliza la pila de navegación para definir las pantallas y sus configuraciones de navegación.
 * @returns {React.ReactNode} Elemento de React que representa la estructura de navegación de la aplicación.
 */
const StackNavigation = (): React.ReactNode => {
  return (
    <Stack.Navigator>
      {/* Pantalla "Home" */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          // Configuración de la barra de navegación para la pantalla "Home"
          headerTitle: () => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/millionanduptitle.png')}
                style={{width: 240, height: 60}}
              />
            </View>
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            height: 36 + (StatusBar.currentHeight || 40),
          },
          headerBackground: () => (
            <LinearGradient
              colors={['#1D006B', '#5917D7']}
              style={{flex: 1}}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
            />
          ),
        }}
      />

      {/* Pantalla "Crypto" */}
      <Stack.Screen
        name="Crypto"
        component={CryptoView}
        // Definición de elementos compartidos para la animación compartida durante la transición a la pantalla "Crypto"
        sharedElements={route => {
          const item = route.params?.item;
          return [
            {
              id: `item.${item?.id}.photo`,
              animation: 'fade',
              resize: 'clip',
            },
            {
              id: `item.${item?.id}.name`,
              animation: 'fade',
              resize: 'clip',
            },
            {
              id: `item.${item?.id}.price`,
              animation: 'fade',
              resize: 'clip',
            },
            {
              id: `item.${item?.id}.symbol`,
              animation: 'fade',
              resize: 'clip',
            },
          ];
        }}
        options={{
          // Configuración de la barra de navegación para la pantalla "Crypto"
          headerTitle: () => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/millionanduptitle.png')}
                style={{width: 240, height: 60}}
              />
            </View>
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            height: 36 + (StatusBar.currentHeight || 40),
          },
          headerBackground: () => (
            <LinearGradient
              colors={['#1D006B', '#5917D7']}
              style={{flex: 1}}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
            />
          ),
          // Personalización de la imagen de retroceso (atrás) en la barra de navegación
          headerBackImage: () => (
            <Image
              source={require('../assets/back.png')}
              style={{width: 22, height: 22}}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
