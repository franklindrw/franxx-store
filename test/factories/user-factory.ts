import { User, UserProps } from '@src/entities/user';
type Override = Partial<UserProps>;

export function makeUsers(override: Override = {}) {
  return new User({
    nome: 'Nome de exemplo',
    email: 'exemplo@email.com',
    password: '1234',
    ...override,
  });
}
