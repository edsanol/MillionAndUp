import {AxiosHttpClient} from '../data/api/http';
import {CryptoRepositoryImpl} from '../data/repositories/cryptoRepository';
import {CryptoServiceImpl} from '../data/services/cryptoService';
import {GetAllCryptosUseCase} from '../domain/useCases/getAllCryptosUseCase';

// URL base de la API de criptomonedas
const baseUrl = 'https://api.coinlore.net/api';

// Crear una instancia del cliente HTTP utilizando AxiosHttpClient y la URL base
const axiosClient = new AxiosHttpClient(baseUrl);

// Crear una instancia del servicio CryptoServiceImpl utilizando el cliente HTTP
const cryptoService = new CryptoServiceImpl(axiosClient);

// Crear una instancia del repositorio CryptoRepositoryImpl utilizando el servicio CryptoServiceImpl
const cryptoRepository = new CryptoRepositoryImpl(cryptoService);

// Crear una instancia del caso de uso GetAllCryptosUseCase utilizando el repositorio CryptoRepositoryImpl
const useCase = new GetAllCryptosUseCase(cryptoRepository);

// Exportar el caso de uso GetAllCryptosUseCase para que pueda ser utilizado en otras partes de la aplicación
export {useCase};
