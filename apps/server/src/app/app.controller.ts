import { Body, Post, Controller} from '@nestjs/common';
import { AppService } from './app.service';
import {CakeOrderSchema,  CakeOrderDto} from '@yeezahs-cakes/shared-models' ;

@Controller('cakes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async orderCake(@Body() cakeOrder: CakeOrderDto){
    console.log('Recieved Data: ', cakeOrder);
    return {message: 'User created successfully'};
  }
}
