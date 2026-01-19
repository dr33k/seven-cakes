import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MailerModule} from '@nestjs-modules/mailer';
import {HandlebarsAdapter} from '@nestjs-modules/mailer/lib/adapters';

@Module({
  imports: [
    MailerModule.forRoot({
      transport:{
        host: 'smtp.google.com',
        port: 537,
        auth: {
          user: 'sevenpointzerozero@gmail.com',
          pass:'#Hashtag0#'        }
      },
      defaults:{
        replyTo: '"No Reply" <noreply@example.com'
      },
      template:{
        dir: process.cwd() + '/templates/',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
