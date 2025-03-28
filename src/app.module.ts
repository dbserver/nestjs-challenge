import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule, DB } from './database.module';
import knexConfig from '../knexfile';
@Module({
  imports: [DatabaseModule.forRoot(DB, knexConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
