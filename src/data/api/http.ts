import axios, {AxiosInstance, AxiosResponse} from 'axios';

/**
 * Interfaz que define los métodos de un cliente HTTP genérico.
 * Cualquier cliente HTTP que implemente esta interfaz debe proporcionar una función "get" para realizar solicitudes GET.
 */
export interface HttpClient {
  get<T>(url: string): Promise<T>;
}

/**
 * Clase que implementa la interfaz HttpClient utilizando la biblioteca Axios para realizar solicitudes HTTP.
 * Proporciona una implementación del método "get" para obtener datos de un servidor mediante una solicitud GET.
 */
export class AxiosHttpClient implements HttpClient {
  private instance: AxiosInstance;

  /**
   * Constructor de la clase AxiosHttpClient.
   * @param {string} baseUrl - La URL base que se utilizará para todas las solicitudes realizadas por este cliente HTTP.
   */
  constructor(private baseUrl: string) {
    this.instance = axios.create({baseURL: this.baseUrl});
  }

  /**
   * Método para realizar una solicitud GET a la URL especificada.
   * @param {string} url - La URL a la que se enviará la solicitud GET.
   * @returns {Promise<T>} - Una promesa que resuelve a los datos de la respuesta recibida en la solicitud GET.
   */
  async get<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.get(url);
    return response.data;
  }
}
