import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async signIn(username: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ name: username, password });

    console.log(user);
    if (!user) {
      throw new NotFoundException('user not found !');
    }

    console.log({ username, password });
    return 'logged in !';
  }
}
