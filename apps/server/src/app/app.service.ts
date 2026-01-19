import { Injectable } from '@nestjs/common';
import { CakeOrderDto } from '@yeezahs-cakes/shared-models';

@Injectable()
export class AppService {
  sendEmail(order: CakeOrderDto){

  }
}
