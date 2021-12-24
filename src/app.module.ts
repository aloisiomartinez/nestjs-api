import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackoffceModule } from './modules/backoffce/backoffce.module';
import { StoreModule } from 'src/modules/store/store.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@nestpetshoapi.nggxu.mongodb.net/test',
    ),
    BackoffceModule,
    StoreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
