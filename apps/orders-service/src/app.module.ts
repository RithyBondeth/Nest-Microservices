import { Module } from '@nestjs/common';
import { OrdersController } from './orders/orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICES } from 'utils/constant';

@Module({
  imports: [ClientsModule.register([
    {
      name: MICROSERVICES.PRODUCT_REDIS_CLIENT,
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      }
    }
  ])],
  controllers: [OrdersController],
  providers: [],
})
export class AppModule {}
