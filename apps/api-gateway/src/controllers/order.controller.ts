import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MICROSERVICE_CLIENTS } from 'utils/constant';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.ORDERS_SERVICE)
    private readonly ordersService: ClientProxy,
  ) {}

  @Post()
  createOrder(@Body() order: any) {
    return this.ordersService.send('create_order', order);
  }
}
