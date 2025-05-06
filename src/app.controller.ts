import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('sum')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getSum(@Body() body: { num1: number; num2: number }) {
    const { num1, num2 } = body;
    return this.appService.sum(num1, num2);
  }
}
