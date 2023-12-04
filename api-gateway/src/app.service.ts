import { Inject, Injectable } from '@nestjs/common';
import { ChargeCustomerDTO } from './dto/charge-customer.dto';
import { ClientKafka } from '@nestjs/microservices';
import { CustomerChargedEvent } from './events/impl/custom-charged.event';
import { nanoid } from 'nanoid';
import { EVENT_NAMES } from './constants/eventsNames';

@Injectable()
export class AppService {
  constructor(
    @Inject('CUSTOMER_SERVICE') private readonly customerClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  chargeCustomer({ customerId, amount }: ChargeCustomerDTO) {
    this.customerClient.emit(
      EVENT_NAMES.CUSTOMER_CHARGED,
      new CustomerChargedEvent(nanoid(), customerId, amount),
    );
  }
}
