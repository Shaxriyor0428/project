import { Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('reset-problems')
  async resetProblemsFlag() {
    const result = await this.usersService.resetProblemsFlag();
    return result;
  }
}
