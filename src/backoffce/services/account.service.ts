import { User } from './../models/user.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AccountService {
  constructor(@InjectModel('User') private readonly model: Model<User>) {}

  async create(data: User): Promise<User> {
    console.log(data);
    const user = new this.model(data);
    console.log(user);

    return await user.save();
  }
}
