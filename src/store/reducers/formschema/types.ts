import {IProperty} from "../../../models/IUser";

export interface SchemaState {
    schemas: IFetchedSchema[];
    schemaItem: IFetchedSchema,
}

export enum SchemaActionEnum {
    SET_SCHEMA = "SET_SCHEMA",
    SET_SCHEMA_ITEM = "SET_SCHEMA_ITEM"
}

export interface SetSchemaAction {
    type: SchemaActionEnum.SET_SCHEMA;
    payload: IFetchedSchema[]
}

export interface SetSchemaItemAction {
  type: SchemaActionEnum.SET_SCHEMA_ITEM;
  payload: IFetchedSchema
}


export type ISchema = {
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
    SetSchemaAction | SetSchemaItemAction
