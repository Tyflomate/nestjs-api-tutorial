import { Inject, Injectable } from '@nestjs/common';
import * as schema from '../db/schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DB_NAME } from './constants';

@Injectable({})
export class AppService {
  constructor(@Inject(DB_NAME) protected db: NodePgDatabase<typeof schema>) {}
}
