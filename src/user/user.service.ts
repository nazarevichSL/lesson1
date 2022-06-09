import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private user = [];

  getAll() {
    return this.user;
  }
  getOneById(id: stringr) {
    return this.user.find((user) => user.id === id);
  }

  createUser(userDto: CreateUserDto) {
    this.user.push({
      ...userDto,
      id: new Date().valueOf(),
    });
    return userDto;
  }
}
