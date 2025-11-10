import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { MICROSERVICES } from 'utils/constant';

@Controller()
export class OrdersController {
  constructor(
    @Inject(MICROSERVICES.PRODUCT_REDIS_CLIENT)
    private readonly productRedisClient: ClientProxy,
  ) {}

  @MessagePattern('create_order')
  async create_order(order: any) {
    console.log({ message: 'Order Received', order });
    this.productRedisClient.emit('order.created', order);
    return { message: 'Created Order', order };
  }
}
