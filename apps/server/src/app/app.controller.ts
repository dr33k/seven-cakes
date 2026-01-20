import { Body, Post, Controller} from '@nestjs/common';
import { AppService } from './app.service';
import {CakeOrderSchema,  CakeOrderDto} from '@yeezahs-cakes/shared-models' ;

@Controller('cakes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async orderCake(@Body() cakeOrder: CakeOrderDto){
    console.log('New ', cakeOrder.eventType + ' Cake from '+cakeOrder.name);
    this.appService.sendEmail(cakeOrder);
    console.log('Sending email');
  }
}
