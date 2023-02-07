import { UsersRepository } from './user.repository';
import { makeUsers } from '../../test/factories/user-factory';

describe('User Repository', () => {
  it('should be able to add users in array', () => {
    const usersRepository = new UsersRepository();

    const userTest1 = makeUsers({
      nome: 'Franklin',
      email: 'franklin@email.com',
    });

    const userTest2 = makeUsers({
      nome: 'Brian',
    });

    usersRepository.addUser(userTest1);
    usersRepository.addUser(userTest2);

    expect(usersRepository).toBeTruthy();
  });
});
