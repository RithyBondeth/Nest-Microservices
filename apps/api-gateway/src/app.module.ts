import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICE_CLIENTS } from 'utils/constant';
import { OrdersController } from './controllers/order.controller';

@Module({
  imports: [ClientsModule.register([
    {
      name: MICROSERVICE_CLIENTS.USERS_SERVICE,
      transport: Transport.TCP,
      options: {
        port: 4003,
      },
    },
    {
      name: MICROSERVICE_CLIENTS.PRODUCTS_SERVICE, 
      transport: Transport.TCP,
      options: {
        port: 4002,
      }
    },
    {
      name: MICROSERVICE_CLIENTS.ORDERS_SERVICE, 
      transport: Transport.TCP,
      options: {
        port: 4001,
      }
    }
  ])],
  controllers: [OrdersController],
})
export class AppModule {}
