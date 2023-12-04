import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ChargeCustomerDTO } from './dto/charge-customer.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  chargeCustomer(@Body() chargeCustomerInput: ChargeCustomerDTO) {
    this.appService.chargeCustomer(chargeCustomerInput);
  }
}
