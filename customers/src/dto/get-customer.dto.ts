export class GetCustomerDTO {
  constructor(public readonly customerId: string) {}

  toString() {
    return JSON.stringify({ customerId: this.customerId });
  }
}
