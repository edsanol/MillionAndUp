import {Crypto} from '../src/domain/entities/Crypto';

describe('Crypto', () => {
  it('should create a Crypto instance', () => {
    const cryptoData = {
      id: '1',
      symbol: 'BTC',
      name: 'Bitcoin',
      rank: 1,
      priceUSD: '50000',
      percentChange24h: '0.5',
      percentChange1h: '0.2',
      percentChange7d: '1.5',
      priceBTC: '1',
    };

    const crypto = new Crypto(cryptoData);

    expect(crypto.id).toBe('1');
    expect(crypto.symbol).toBe('BTC');
  });
});
