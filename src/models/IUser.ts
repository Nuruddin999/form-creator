export interface IUser {
  username: string;
  password: string;
}
export interface IValidation {
  required: boolean,
  min?: string,
  max?: string,
  pattern?: string,
}
export interface IOptions {
  key: string,
  value: string,
}
export interface IProperty {
  key: string,
  label: string,
  type: string,
  validation: IValidation,
  options?: Array<IOptions>
}
