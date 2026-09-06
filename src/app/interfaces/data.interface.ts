export interface Student {
  id: number;
  name: string;
  phone: string;
  age: number;
  languages: Array<string>;
}

interface Order {
  OrderType: string;
  Price: number;
  Volume: number;
}

export interface OrderBook {
  BuyOrders: Array<Order>;
  SellOrders: Array<Order>;
  CreatedTimestampUtc: string;
}


interface Price {
  bid: number;
  ask: number;
  last: number;
}

export interface LatestPrices {
  status: string;
  prices: {
    btc: Price;
    ltc: Price;
    doge: Price;
  };
}
