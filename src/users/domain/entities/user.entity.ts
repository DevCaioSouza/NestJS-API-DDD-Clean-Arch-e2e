import { Entity } from "@/shared/domain/entities/entity"

export type UserProps = {
  name: string
  email: string
  password: string
  createdAt?: Date
}

// DDD: Qualquer propriedade da entidade só pode ser manipulada pela própria entidade
export class UserEntity extends Entity<UserProps> {
  constructor(public readonly props: UserProps, id?: string) {
    super(props, id)
    this.props.createdAt = this.props.createdAt ?? new Date();
  }

  update(value: string): void {
    this.name = value
  }

  updatePassword(value: string): void {
    this.password = value
  }

  get name() {
    return this.props.name
  }

  private set name(value: string) {
    this.props.name = value
  }


  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password
  }

  private set password(value: string) {
    this.props.password = value
  }


  get createdAt() {
    return this.props.createdAt
  }
}

//obs: A entidade é um recurso específico da camada de domínio. É principal recurso da aplicação
// Praticamente, ela é em si o "motivo da existência do software"


