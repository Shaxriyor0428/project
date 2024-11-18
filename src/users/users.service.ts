import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async resetProblemsFlag(): Promise<{
    updatedCount: number;
    totalProblems: number;
  }> {
    const totalProblems = await this.usersRepository.count({
      where: { problems: true },
    });

    await this.usersRepository.update({ problems: true }, { problems: false });

    return {
      updatedCount: totalProblems,
      totalProblems: totalProblems,
    };
  }
}
