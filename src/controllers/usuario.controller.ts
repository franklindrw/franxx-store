import { Controller, Post, Body } from '@nestjs/common';
import { UsersRepository } from '../repositories/user.repository';

@Controller('/usuarios')
export class UsuarioController {
  #usersRepository = new UsersRepository();

  @Post()
  async criaUsuario(@Body() dataUser) {
    this.#usersRepository.addUser(dataUser);
    return {
      message: 'usuário cadastrado com sucesso!',
    };
  }
}
