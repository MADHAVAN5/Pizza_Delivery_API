import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { DatabaseModule } from '../database.model';
import { AuthModule } from '../auth/auth.module';
import { MailgunModule } from '@mindik/mailgun-nestjs';

@Module({
  imports:[AuthModule, 
    DatabaseModule,
    MailgunModule.forRoot({
      username: 'sandboxe894a379eaf44901a8212e4bbf6f8ab4.mailgun.org',
      key: 'af10dcea3bcec4d5ded9271b133d9d86-73f745ed-42670b11',
    }),
  ],
  providers: [OrderService, OrderService],
  controllers: [OrderController]
})
export class OrderModule {}
