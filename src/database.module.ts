import { DynamicModule, Module } from '@nestjs/common';
import knex, { type Knex } from 'knex';

@Module({})
export class DatabaseModule {
  public static forRoot(token: string, options: Knex.Config): DynamicModule {
    return {
      global: true,
      module: DatabaseModule,
      providers: [
        {
          provide: token,
          useFactory: (): Knex => knex(options),
        },
      ],
      exports: [token],
    };
  }
}

export const KNEX_TOKEN = 'KNEX_TOKEN';
