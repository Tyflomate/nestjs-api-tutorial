import { Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { DB_NAME } from '../src/constants';
import * as schema from './schema';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    {
      provide: DB_NAME,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const connectionString = configService.get<string>('DATABASE_URL');
        const pool = new Pool({
          connectionString,
          ssl: false,
        });

        return drizzle(pool, { schema });
      },
    },
  ],
  exports: [DB_NAME],
})
export class DrizzleModule {}
