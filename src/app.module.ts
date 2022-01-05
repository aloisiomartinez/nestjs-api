import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackoffceModule } from './modules/backoffce/backoffce.module';
import { StoreModule } from 'src/modules/store/store.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@nestpetshoapi.nggxu.mongodb.net/test',
    ),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mysql',
      database: '7180',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    BackoffceModule,
    StoreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
