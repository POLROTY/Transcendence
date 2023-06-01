import { Controller, Post } from '@nestjs/common';
import { ClickService } from './click.service';

@Controller('click')
export class ClickController {
  constructor(private readonly clickService: ClickService) {}

  @Post('increment')
  increment(): Promise<void> {
    return this.clickService.increment();
  }
}
