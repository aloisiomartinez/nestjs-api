import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return 'Obter os clients';
  }

  @Get(':document')
  getById(@Param('document') document) {
    return 'Obter os clients' + document;
  }

  @Post()
  post(@Body() Body) {
    return Body;
  }

  @Put(':document')
  put(@Param('document') document, @Body() Body) {
    return {
      customer: document,
      data: Body,
    };
  }

  @Delete(':document')
  delete(@Param('document') document) {
    return 'Remover os clients';
  }
}
