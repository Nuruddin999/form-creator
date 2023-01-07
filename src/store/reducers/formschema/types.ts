import { IProperty } from "../../../models/IUser";

export interface SchemaState {
  schemas: ISchema[];
  schemaItem: ISchema,
  error:string,
  isLoading:boolean
}

export enum SchemaActionEnum {
  SET_SCHEMA = "SET_SCHEMA",
  SET_SCHEMA_ITEM = "SET_SCHEMA_ITEM",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_ERROR = "SET_ERROR",
}

export interface SetSchemaAction {
  type: SchemaActionEnum.SET_SCHEMA;
  payload: ISchema[]
}

export interface SetSchemaItemAction {
  type: SchemaActionEnum.SET_SCHEMA_ITEM;
  payload: ISchema
}

export interface SetIsLoadingAction {
  type: SchemaActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SetErrorAction {
  type: SchemaActionEnum.SET_ERROR;
  payload: string;
}

export type ISchema = {
  id?: string,
  uid?: string,
  name: string,
  fields: Array<IProperty>
}
export type IFetchedSchema = {
  id: number
  schema: {
    name: string,
    fields: Array<IProperty>
  },
}





export type SchemaAction =
  SetSchemaAction | SetSchemaItemAction | SetErrorAction | SetIsLoadingAction
