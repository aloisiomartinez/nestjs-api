import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Custumer } from '../models/custumer.model';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private readonly model: Model<Custumer>,
  ) {}

  async create(data: Custumer): Promise<Custumer> {
    const customer = new this.model(data);

    return await customer.save();
  }
}
