import { Injectable } from '@nestjs/common';
import { CakeOrderDto } from '@yeezahs-cakes/shared-models';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AppService {
  to = 'mikole76@gmail.com';
  from = '"Yeezahs Cakes" <sevenpointzerozero@gmail.com>';

  constructor(private readonly mailerService: MailerService){
  }

  async sendEmail(order: CakeOrderDto){
    await this.mailerService.sendMail({
      to: this.to,
      from: this.from,
      replyTo: order.email,
      subject: order.name + "'s Cake: " + order.eventType.toString(),
      template: '../assets/templates/new_order.hbs',
      context: {...order, eventType: order.eventType.toString().toUpperCase()}
    })
  }
}
