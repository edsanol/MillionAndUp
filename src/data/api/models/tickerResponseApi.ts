export interface TickerResponseApi<T = any> {
  data: T;
  info: {
    coins_num: number;
    time: number;
  };
}
