import {GetAllCryptosUseCase} from '../src/domain/useCases/getAllCryptosUseCase';
import {CryptoRepository} from '../src/domain/repositories/cryptoRepository';

const mockRepository = {
  getAllCryptos: jest.fn(),
};

describe('GetAllCryptosUseCase', () => {
  test('should call the repository method with the provided urlQuery', async () => {
    const useCase = new GetAllCryptosUseCase(mockRepository);
    const urlQuery = 'https://example.com/cryptos';

    await useCase.execute(urlQuery);

    expect(mockRepository.getAllCryptos).toHaveBeenCalledWith(urlQuery);
  });
});
