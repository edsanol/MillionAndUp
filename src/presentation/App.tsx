import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';

/**
 * Componente principal de la aplicación.
 * Es el punto de entrada principal y envuelve la aplicación con el contexto de Redux y la navegación.
 * @returns {React.ReactNode} Elemento de React que representa la aplicación.
 */
const App = (): React.ReactNode => {
  // Provider proporciona el almacenamiento global de Redux a toda la aplicación.
  // Se pasa la instancia del almacenamiento "store" a través de las props para que esté disponible en todos los componentes conectados.
  return (
    <Provider store={store}>
      {/* NavigationContainer envuelve y proporciona navegación a la aplicación */}
      <NavigationContainer>
        {/* Componente de navegación principal que define la estructura de navegación de la aplicación */}
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
