import { Injectable } from '@nestjs/common';
// import { users } from '../../db/schema';
import { AppService } from 'src/app.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { users } from 'db/schema';

@Injectable({})
export class AuthService extends AppService {
  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    const user = await this.db
      .insert(users)
      .values({ email: dto.email, hash })
      .returning();
    // const res = await this.db.select().from(users);
    return { user: user };
  }

  signin() {
    return { msg: 'I am signing in' };
  }
}
