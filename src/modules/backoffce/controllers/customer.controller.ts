import { User } from './../models/user.model';
import { AccountService } from './../services/account.service';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { CreateCustomerContract } from '../contracts/customer/create-customer.contract';
import { CreateCustomerDTO } from '../dtos/customer/create-customer-dto';
import { Result } from '../models/result.model';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer.model';
import { QueryDto } from '../dtos/query-dto';
import { UpdateCustomerContract } from '../contracts/customer/update-customer.contract';
import { UpdateCustomerDto } from '../dtos/customer/update-customer-dto';

@Controller('v1/customers')
export class CustomerController {
  constructor(
    private readonly accountService: AccountService,
    private readonly customerService: CustomerService,
  ) {}

  @Post()
  @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
  async post(@Body() model: CreateCustomerDTO) {
    try {
      const user = await this.accountService.create(
        new User(model.document, model.password, true),
      );

      const customer = new Customer(
        model.name,
        model.document,
        model.email,
        [],
        null,
        null,
        null,
        user,
      );

      const res = await this.customerService.create(customer);

      return new Result('Cliente criado com sucesso!', true, res, null);
    } catch (error) {
      throw new HttpException(
        new Result(
          'Não foi possível realizar o seu cadastro',
          false,
          null,
          error,
        ),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Put(':document')
  @UseInterceptors(new ValidatorInterceptor(new UpdateCustomerContract()))
  async update(@Param('document') document, @Body() model: UpdateCustomerDto) {
    try {
      await this.customerService.update(document, model);
      return new Result(null, true, model, null);
    } catch (error) {
      throw new HttpException(
        new Result('Não foi possível atualizar seus dados', false, null, error),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  async getAll() {
    try {
      const res = await this.customerService.findAll();
      return new Result(null, true, res, null);
    } catch (error) {
      throw new HttpException(
        new Result('Não foi listar os clientes', false, null, error),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get(':document')
  async get(@Param('document') document) {
    try {
      const res = await this.customerService.find(document);
      return new Result(null, true, res, null);
    } catch (error) {
      throw new HttpException(
        new Result('Não foi listar os clientes', false, null, error),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('query')
  async query(@Body() model: QueryDto) {
    try {
      const res = await this.customerService.query(model);
      return new Result(null, true, res, null);
    } catch (error) {
      throw new HttpException(
        new Result('Não foi listar os clientes', false, null, error),
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
