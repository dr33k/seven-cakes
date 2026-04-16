import { Injectable } from '@nestjs/common';
import { CakeOrderDto } from '@seven-cakes/shared-models';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AppService {
  to = 'mikole76@gmail.com';
  from = '"Seven Cakes" <sevenpointzerozero@gmail.com>';

  constructor(private readonly mailerService: MailerService){
  }

  async sendEmail(order: CakeOrderDto){
    await this.mailerService.sendMail({
      to: this.to,
      from: this.from,
      replyTo: order.email,
      subject: order.name + "'s Cake: " + order.eventType.toString(),
      template: '../apps/server/src/assets/templates/new_order.hbs',
      context: {
        ...order, 
        eventType: order.eventType.toString().toUpperCase(),
        address: order.address || "None Specified"
      }

    })
  }
}
