import {CryptoServiceImpl} from '../src/data/services/cryptoService';
import {CryptoModel} from '../src/domain/models/CryptoModel';

const mockHttpClient = {
  get: jest.fn(),
};

describe('CryptoServiceImpl', () => {
  test('should call the HttpClient method with the provided urlQuery and return valid data', async () => {
    const service = new CryptoServiceImpl(mockHttpClient);
    const urlQuery = 'https://example.com/cryptos';

    const mockResponseData = [
      {
        id: '1',
        symbol: 'BTC',
        name: 'Bitcoin',
        rank: 1,
        price_usd: '50000',
        percent_change_24h: '1.5',
        percent_change_1h: '0.5',
        percent_change_7d: '2.0',
        price_btc: '1.0',
      },
    ];

    mockHttpClient.get.mockResolvedValueOnce({data: mockResponseData});

    const result = await service.getAllCryptos(urlQuery);
    expect(mockHttpClient.get).toHaveBeenCalledWith(urlQuery);

    const expectedData = mockResponseData.map(
      cryptoData =>
        new CryptoModel({
          id: cryptoData.id,
          symbol: cryptoData.symbol,
          name: cryptoData.name,
          rank: cryptoData.rank,
          price_usd: cryptoData.price_usd,
          percent_change_24h: cryptoData.percent_change_24h,
          percent_change_1h: cryptoData.percent_change_1h,
          percent_change_7d: cryptoData.percent_change_7d,
          price_btc: cryptoData.price_btc,
        }),
    );

    expect(result).toEqual(expectedData);
  });
});
