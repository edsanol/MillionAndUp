# Million And Up Test - App de Consulta de Criptomonedas

Bienvenido(a) al repositorio de Million And Up Test, una aplicación móvil desarrollada en React Native que te permite consultar el valor en dólares de diferentes criptomonedas a través de la API de CoinLore.

## Requisitos previos

Antes de ejecutar la aplicación, asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- Node.js
- npm (Node Package Manager) o yarn
- React Native CLI

## Instalación

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:
```
git clone https://github.com/edsanol/MillionAndUp.git
```
2. Accede al directorio del proyecto:
```
cd MillionAndUpTest
```
3. Instala las dependencias del proyecto ejecutando:
```
npm install
```
   o
```
yarn install
```

## Ejecución de la aplicación

Una vez que hayas instalado todas las dependencias, puedes ejecutar la aplicación en tu simulador o dispositivo móvil usando los siguientes comandos:

Para iOS:
```
react-native run-ios
```
Para Android:
```
react-native run-android
```

La aplicación se abrirá en tu dispositivo o emulador, permitiéndote explorar y consultar el valor en dólares de varias criptomonedas.

## Arquitectura y Patrones de Diseño

Million And Up Test ha sido desarrollado siguiendo los principios del Clean Code y SOLID, con una clean arquitecture basada en tres capas: Domain, Data y Presentation. Cada capa está diseñada para desacoplar los componentes y facilitar el mantenimiento, escalabilidad y testeabilidad del proyecto.

### Capas de la Arquitectura

1. **Domain**: Contiene la lógica de negocio y las entidades del dominio. Aquí se definen las reglas de negocio y se modelan las criptomonedas y otros conceptos clave.

2. **Data**: Se encarga de interactuar con la API de CoinLore y gestionar los datos necesarios para la aplicación. Implementa el patrón Repository para abstraer la fuente de datos y facilitar los cambios futuros en la API o en la librería de peticiones http.

3. **Presentation**: En esta capa, se encuentra la interfaz de usuario y la lógica de presentación. Se ha seguido el patrón Redux y MVVM, recomendado por Google, para gestionar el estado de la aplicación y mantener una separación clara entre la lógica de presentación y los datos.

## Documentación y Tests

El proyecto incluye documentación clara y concisa para facilitar el entendimiento de la arquitectura y la estructura del código. Además, se han desarrollado tests unitarios para asegurar la calidad y robustez del código.

## Buenas Prácticas y Performance

Se ha seguido las mejores prácticas de desarrollo en React Native para garantizar un código limpio y mantenible. También nos hemos preocupado por la performance de la aplicación, optimizando el rendimiento para una experiencia fluida del usuario.

## Estructura del Proyecto

La estructura del proyecto ha sido organizada cuidadosamente para mantener la claridad y facilitar la navegación. A continuación, se presenta un resumen de los directorios más importantes:
```
|-- src
| |-- domain # Lógica de negocio y entidades
| |-- data # Capa de datos y repositorios
| |-- presentation # Interfaz de usuario y lógica de presentación
| |-- config # Contiene la inyección de dependencias
```

## Licencia

Million And Up Test está bajo la licencia [MIT]([enlace-a-licencia](https://opensource.org/license/mit/)).

## Contacto

Si tienes alguna pregunta o sugerencia sobre el proyecto, no dudes en ponerte en contacto conmigo a través de [edsanol99@gmail.com](mailto:edsanol99@gmail.com).
