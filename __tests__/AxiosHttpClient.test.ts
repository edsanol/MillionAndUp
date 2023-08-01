import axios from 'axios';
import {AxiosHttpClient} from '../src/data/api/http';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockInstance: any = {
  get: jest.fn(),
};
mockedAxios.create.mockReturnValue(mockInstance);

describe('AxiosHttpClient', () => {
  test('should call the axios.get method with the provided url and return valid data', async () => {
    const httpClient = new AxiosHttpClient('https://example.com/api');
    const url = '/cryptos';
    const mockResponseData = {data: 'Valid data'};
    mockInstance.get.mockResolvedValueOnce(mockResponseData);
    const result = await httpClient.get(url);

    expect(mockInstance.get).toHaveBeenCalledWith(url);
    expect(result).toEqual(mockResponseData.data);
  });
});
