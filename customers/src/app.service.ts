import { Inject, Injectable } from '@nestjs/common';
import { CustomerChargedEvent } from './events/impl/custom-charged.event';
import { ClientKafka } from '@nestjs/microservices';
import { TOPIC_NAMES } from './constants/topicNames';
import { GetCustomerDTO } from './dto/get-customer.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTHENTICATION_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  handleCustomerCharged(payload: CustomerChargedEvent) {
    const { amount, customerId } = payload;

    this.authClient
      .send(TOPIC_NAMES.GET_CUSTOMER, new GetCustomerDTO(customerId))
      .subscribe((customer) => {
        console.log(
          `Charging customer with payment of $${amount} gateway ID: ${customer.gatewayId}`,
        );
      });
  }
}
