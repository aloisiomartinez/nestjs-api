import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from '../models/customer.model';
import { Address } from '../models/address.model';
import { Pet } from '../models/pet.model';
import { QueryDto } from '../dtos/query-dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private readonly model: Model<Customer>,
  ) {}

  async create(data: Customer): Promise<Customer> {
    const customer = new this.model(data);

    return await customer.save();
  }

  async findAll(): Promise<Customer[]> {
    return await this.model.find({}, 'name email document').sort('name').exec();
  }

  async find(document): Promise<Customer[]> {
    return await this.model
      .find({ document })
      .populate('user', 'username') //Popula um document
      .exec();
  }

  async query(model: QueryDto): Promise<Customer[]> {
    return await this.model
      .find(model.query, model.fields, { skip: model.skip, limit: model.take })
      .exec();
  }
}
