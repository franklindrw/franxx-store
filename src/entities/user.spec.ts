import { User } from './user';

describe('User', () => {
  it('should be able to create a user', () => {
    const newUser = new User({
      nome: 'Franklin',
      email: 'franklin@email.com',
      password: '1234',
    });

    expect(newUser).toBeTruthy();
  });
});
