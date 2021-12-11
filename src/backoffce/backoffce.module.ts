import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerController } from './controllers/custumer.controller';
import { CustomerSchema } from './schemas/customer.schema';
import { UserSchema } from './schemas/user.shcma';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Customer',
        schema: CustomerSchema,
      },
      {
        name: 'User',
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [CustomerController],
})
export class BackoffceModule {}
