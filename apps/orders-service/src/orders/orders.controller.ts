import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

@Controller('orders')
export class OrdersController {
    @MessagePattern('create_order')
    async create_order(order: any) {
        console.log({ message: "Order Received", order });
        return { message: "Created Order", order };
    }
}