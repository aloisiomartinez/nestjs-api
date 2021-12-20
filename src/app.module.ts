import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackoffceModule } from './backoffce/backoffce.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@nestpetshoapi.nggxu.mongodb.net/test',
    ),
    BackoffceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
