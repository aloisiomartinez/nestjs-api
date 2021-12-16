import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackoffceModule } from './backoffce/backoffce.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://petshop:petshop@petShopApi.3tzxi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    BackoffceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
