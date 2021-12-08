import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/custumer.controller';

@Module({
  controllers: [CustomerController],
})
export class BackoffceModule {}
