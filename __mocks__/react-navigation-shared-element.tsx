import React from 'react';
import {View, Text} from 'react-native';

export const SharedElement = ({id}: {id: string}) => {
  // Implementación simulada, por ejemplo, un View vacío
  return <View testID={id} />;
};

// Ruta: __mocks__/react-navigation-shared-element.ts

// import React from 'react';
// import {View} from 'react-native';

// // Definir la función HOC simulada
// export const SharedElement =
//   (Component: React.ComponentType) => (props: any) => {
//     // Aquí puedes envolver el componente dentro de un View u otro contenedor
//     return <View>{<Component {...props} />}</View>;
//   };

// // Mock de la función createSharedElementStackNavigator
// export const createSharedElementStackNavigator = jest.fn(() => {
//   // Aquí puedes devolver un objeto con las propiedades que necesites en el test
//   return {
//     Navigator: 'MockNavigator',
//     Screen: 'MockScreen',
//     SharedElement, // Asegúrate de incluir la función HOC en el objeto retornado
//   };
// });
