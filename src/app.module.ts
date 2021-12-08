import { Module } from '@nestjs/common';
import { BackoffceModule } from './backoffce/backoffce.module';

@Module({
  imports: [BackoffceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
