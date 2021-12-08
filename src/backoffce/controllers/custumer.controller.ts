import { Controller } from '@nestjs/common';

@Controller()
export class CustomerController {
  get() {
    return 'Obter os clients';
  }

  post() {
    return 'Criar os clients';
  }

  put() {
    return 'Atualizar os clients';
  }

  delete() {
    return 'Remover os clients';
  }
}
