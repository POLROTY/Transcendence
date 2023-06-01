import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Click } from './click.entity';

@Injectable()
export class ClickService {
  constructor(
    @InjectRepository(Click)
    private clickRepository: Repository<Click>,
  ) {}

  async increment(): Promise<void> {
    const click = await this.clickRepository.findOne(1);
    click.count++;
    await this.clickRepository.save(click);
  }
}
