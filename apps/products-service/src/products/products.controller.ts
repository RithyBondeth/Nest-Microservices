import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class ProductsController {
  @MessagePattern('get_product')
  async getProduct(id: number) {
    return {
      message: 'Products',
      products: { id, name: `Product ${id}`, price: 100 },
    };
  }

  @EventPattern('order.created')
  async updateStock(order: { id: number, productId: number }) {
    console.log("Checking stock for the product: ", order.productId);
    console.log("Stock Updated!!!");
  }
}
