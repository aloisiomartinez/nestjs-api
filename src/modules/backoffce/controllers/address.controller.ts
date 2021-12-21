import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { Result } from '../models/result.model';
import { Address } from '../models/address.model';
import { CreateAddressContract } from '../contracts/address/create-address.contract';
import { AddressService } from '../services/address.service';
import { AddressType } from 'src/modules/enums/address-type.enum';

@Controller('v1/address')
export class AddressController {
  constructor(private readonly service: AddressService) {}

  @Post(':document/billing')
  @UseInterceptors(new ValidatorInterceptor(new CreateAddressContract()))
  async addBillingAddressput(
    @Param('document') document,
    @Body() model: Address,
  ) {
    try {
      const res = await this.service.create(
        document,
        model,
        AddressType.Billing,
      );
      return new Result(null, true, res, null);
    } catch (error) {
      throw new HttpException(
        new Result(
          'Não foi possível adicionar o seu endereço',
          false,
          null,
          error,
        ),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post(':document/shipping')
  @UseInterceptors(new ValidatorInterceptor(new CreateAddressContract()))
  async addShippingAddressput(
    @Param('document') document,
    @Body() model: Address,
  ) {
    try {
      const res = await this.service.create(
        document,
        model,
        AddressType.Shipping,
      );
      return new Result(null, true, res, null);
    } catch (error) {
      throw new HttpException(
        new Result(
          'Não foi possível adicionar o seu endereço',
          false,
          null,
          error,
        ),
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
