import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { ConfigModule } from '@nestjs/config';
import { DrizzleModule } from '../db/drizzle.module';
import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule,
    DrizzleModule,
    UserModule,
    BookmarkModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [AppService],
  controllers: [],
})
export class AppModule {}
