export interface Fella {
  id: string;
  name: string;
  level: number;
  streamedAmount: number;
}

export interface Subscription {
  id: string;
  fellaId: string;
  subscriber: string;
  amountPerSecond: number;
  active: boolean;
}
