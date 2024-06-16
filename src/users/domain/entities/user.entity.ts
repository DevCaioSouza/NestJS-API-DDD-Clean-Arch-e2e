export type UserProps = {
  name: string
  email: string
  password: string
  createdAt?: Date
}

// DDD: Qualquer propriedade da entidade só pode ser manipulada pela própria entidade
export class UserEntity {
  constructor(public readonly props: UserProps) {
    this.props.createdAt = this.props.createdAt ?? new Date();
    // "??" Operador de coalescência nula
  }

  get name(){
    return this.props.name
  }

  get email(){
    return this.props.email
  }

  get password(){
    return this.props.password
  }

  get createdAt(){
    return this.props.createdAt
  }
}

//obs: A entidade é um recurso específico da camada de domínio. É principal recurso da aplicação
// Praticamente, ela é em si o "motivo da existência do software"


