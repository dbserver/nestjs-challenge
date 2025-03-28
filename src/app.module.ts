import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule, KNEX_TOKEN } from './database.module';
import knexConfig from '../knexfile';

@Module({
  imports: [DatabaseModule.forRoot(KNEX_TOKEN, knexConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
