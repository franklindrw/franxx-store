import { User, UserProps } from '@src/entities/user';

export class UsersRepository {
  #users: UserProps[] = [];

  async addUser(user: UserProps) {
    const newUser = new User(user);
    this.#users.push(newUser.userObj);
    console.log(this.#users);
  }
}
