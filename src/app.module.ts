import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackoffceModule } from './backoffce/backoffce.module';

@Module({
  imports: [MongooseModule.forRoot('CONNECTION_STRING'), BackoffceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
