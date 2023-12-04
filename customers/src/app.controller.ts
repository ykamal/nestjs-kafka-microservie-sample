import {
  Controller,
  Get,
  Inject,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka, EventPattern } from '@nestjs/microservices';
import { EVENT_NAMES } from './constants/eventsNames';
import { TOPIC_NAMES } from './constants/topicNames';

@Controller()
export class AppController implements OnModuleInit, OnModuleDestroy {
  constructor(
    private readonly appService: AppService,
    @Inject('AUTHENTICATION_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  onModuleInit() {
    this.authClient.subscribeToResponseOf(TOPIC_NAMES.GET_CUSTOMER);
  }
  onModuleDestroy() {
    throw new Error('Method not implemented.');
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern(EVENT_NAMES.CUSTOMER_CHARGED)
  handleCustomerCharged(data: any) {
    this.appService.handleCustomerCharged(data);
  }
}
