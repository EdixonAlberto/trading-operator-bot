import { Exchange, Dictionary, OrderBook, Market, Balances, Order } from 'ccxt';
import { getExchangeInstance } from './exchangeFactory';
import { typeExchange, typeOrder, typeStatus } from '@types';

class ExchangeServices {
  private static exchange = false as unknown as Exchange;

  public constructor(exchangeId: typeExchange) {
    ExchangeServices.exchange = getExchangeInstance(exchangeId);
  }

  public static getExchangeId(): string | undefined {
    return ExchangeServices.exchange
      ? ExchangeServices.exchange.id
      : undefined;
  }

  public static getMarkets(): Promise<Dictionary<Market>> {
    return ExchangeServices.exchange.loadMarkets();
  }

  public static getBalance(): Promise<Balances> {
    return ExchangeServices.exchange.fetchBalance();
  }

  public static getAvailableMethods(): Dictionary<boolean | "emulated"> {
    return ExchangeServices.exchange.has;
  }

  public static getUrls(): Exchange['urls'] {
    return ExchangeServices.exchange.urls;
  }

  public setUrlTest(): void {
    const serv = ExchangeServices;

    for (const url in serv.getUrls()) {
      if (url === 'test')
        serv.exchange.urls['api'] = serv.exchange.urls['test' as 'api'];
    }
  }

  /* ORDERS */
  public static getOrderBook(
    symbol: string,
    limit?: number
  ): Promise<OrderBook> {
    return ExchangeServices.exchange.fetchOrderBook(symbol, limit);
  }

  public static getOrdersByStatus(status: typeStatus): Promise<Order[]> {
    switch (status) {
      case 'all': return ExchangeServices.exchange.fetchOrders();
      case 'open': return ExchangeServices.exchange.fetchOpenOrders();
      case 'closed': return ExchangeServices.exchange.fetchClosedOrders();
      default:
        throw {
          name: 'StatusError',
          message: `Status incorrect - '${status}' is not recognized as a type of order status`
        }
    }
  }

  public static createOrder(
    { symbol, type, side, amount, price, params }: typeOrder
  ): Promise<any> {
    return ExchangeServices.exchange.createOrder(symbol, type, side, amount, price, params);
  }

  public static deleteOrder(orderId: string): Promise<any> {
    return ExchangeServices.exchange.cancelOrder(orderId);
  }
}

export default ExchangeServices;
