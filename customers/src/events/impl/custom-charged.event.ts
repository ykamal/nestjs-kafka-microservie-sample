export class CustomerChargedEvent {
  constructor(
    public readonly orderId: string,
    public readonly customerId: string,
    public readonly amount: number,
  ) {}

  toString() {
    return JSON.stringify({
      orderId: this.orderId,
      customerId: this.customerId,
      amount: this.amount,
    });
  }
}
