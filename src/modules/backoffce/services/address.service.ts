import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from '../models/customer.model';
import { Address } from '../models/address.model';
import { Pet } from '../models/pet.model';
import { QueryDto } from '../dtos/query-dto';
import { AddressType } from 'src/modules/enums/address-type.enum';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel('Customer') private readonly model: Model<Customer>,
  ) {}

  async create(
    document: string,
    data: Address,
    type: AddressType,
  ): Promise<Customer> {
    const options = { upsert: true }; // new: true, setDefaultsOnInsert: true };
    if (type == AddressType.Billing) {
      return await this.model.findOneAndUpdate(
        { document },
        {
          $set: {
            billingAddress: data,
          },
        },
        options,
      );
    } else {
      return await this.model.findOneAndUpdate(
        { document },
        {
          $set: {
            shippingAddress: data,
          },
        },
        options,
      );
    }
  }
}
