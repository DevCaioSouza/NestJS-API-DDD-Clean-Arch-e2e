export type FieldsErrors = {
  [field: string]: string[]
}

export interface ValidatorFieldsInterface<VProps> {
  errors: FieldsErrors
  validatedData: VProps
  validate(data: any): boolean
}
