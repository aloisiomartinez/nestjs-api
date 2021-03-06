import { User } from './../models/user.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AccountService {
  constructor(@InjectModel('User') private readonly model: Model<User>) {}

  async create(data: User): Promise<User> {
    const user = new this.model(data);

    return await user.save();
  }

  async findOneByUsarname(username) {
    return new User(username, "123456789", true)
  }
}
