import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  @MessagePattern('get_user')
  async getUser(id: number) {
    return { message: 'User', user: { id, name: 'John Doe' } };
  }
}
