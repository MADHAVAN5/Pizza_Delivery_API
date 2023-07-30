import { Inject, Injectable } from '@nestjs/common';
import { Db, ObjectId } from 'mongodb';
import { InjectMailgun } from '@mindik/mailgun-nestjs';
import { CreateOrderDto } from './dtos/order.dto';

@Injectable()
export class OrderService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db,
    @InjectMailgun() private readonly mg,
  ) { }


  async placeOrder(body: CreateOrderDto, email: string) {
    var users = await this.db.collection('users').findOne({ email: email });
    var item = await this.db.collection('items').findOne({ _id: new ObjectId(body.itemId) });
    const user = {
      name: users.name,
      email: users.email,
      Item: item.name,
      price: item.price
    }
    var res = await this.db.collection('order').insertOne(user);
    this.mg.messages
      .create('sandboxe894a379eaf44901a8212e4bbf6f8ab4.mailgun.org', {
        from: 'Excited User <mailgun@sandboxe894a379eaf44901a8212e4bbf6f8ab4.mailgun.org>',
        to: email,
        subject: 'Order Conformed',
        text: 'your pizza Order is Conformed',
      })
      .then((msg) => console.log(msg)) // logs response data
      .catch((err) => console.log(err)); // logs any error

    return res;
  }
}
