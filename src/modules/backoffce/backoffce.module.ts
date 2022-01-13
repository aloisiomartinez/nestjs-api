import { AccountService } from './services/account.service';
import { CacheModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerController } from './controllers/customer.controller';
import { CustomerSchema } from './schemas/customer.schema';
import { UserSchema } from './schemas/user.shcma';
import { CustomerService } from './services/customer.service';
import { AddressService } from './services/address.service';
import { PetService } from './services/pet.service';
import { AddressController } from './controllers/address.controller';
import { PetController } from './controllers/pet.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    CacheModule.register(),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
      signOptions: {
        expiresIn: 3600,
      },
    }),
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
    HttpModule,
  ],
  controllers: [
    AddressController,
    CustomerController,
    PetController,
    AccountController,
  ],
  providers: [
    AccountService,
    AddressService,
    CustomerService,
    PetService,
    AuthService,
    JwtStrategy,
  ],
})
export class BackoffceModule {}
