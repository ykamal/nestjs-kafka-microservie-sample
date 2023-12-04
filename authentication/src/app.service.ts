import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly customers: any[] = [
    {
      id: `customer1`,
      gatewayId: `c1gwid`,
    },
    {
      id: `customer2`,
      gatewayId: `c2gwid`,
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getCustomer(data: { customerId: string }) {
    const { customerId } = data;
    return this.customers.find((c) => c.id === customerId);
  }
}
