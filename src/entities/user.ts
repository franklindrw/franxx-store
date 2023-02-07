export interface UserProps {
  nome: string;
  email: string;
  password: string;
}

export class User {
  #nome: string;
  #email: string;
  #password: string;

  constructor(props: UserProps) {
    this.#nome = props.nome;
    this.#email = props.email;
    this.#password = props.password;
  }

  public get nome(): string {
    return this.#nome;
  }

  public set nome(nome: string) {
    if (nome === '') {
      throw new Error('nome inválido!');
    }

    this.#nome = nome;
  }

  public get email(): string {
    return this.#email;
  }

  public set email(email: string) {
    if (email === '') {
      throw new Error('e-mail inválido!');
    }

    this.#email = email;
  }

  public get password(): string {
    return this.#password;
  }

  public set password(password: string) {
    if (password === '') {
      throw new Error('senha inválido!');
    }

    this.#password = password;
  }

  public get userObj(): UserProps {
    return {
      nome: this.#nome,
      email: this.#email,
      password: this.#password,
    };
  }
}
