import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ProductsController {
  @MessagePattern('get_product')
  async getProduct(id: number) {
    return {
      message: 'Products',
      products: { id, name: `Product ${id}`, price: 100 },
    };
  }
}
