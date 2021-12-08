import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return 'Obter os clients';
  }

  @Post()
  post() {
    return 'Criar os clients';
  }

  @Put()
  put() {
    return 'Atualizar os clients';
  }

  @Delete()
  delete() {
    return 'Remover os clients';
  }
}
