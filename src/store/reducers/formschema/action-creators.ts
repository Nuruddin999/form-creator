import { createFormApi, getFormsApi, getFormItemApi, removeFormItemApi, updateFormItemApi } from './../../../api/form';
import { IFetchedSchema, ISchema, SchemaActionEnum, SetSchemaAction, SetSchemaItemAction } from "./types";
import { IProperty } from "../../../models/IUser";
import { AppDispatch, RootState } from "../../index";

export const FormSchemaActionCreators = {
  setSchema: (payload: IFetchedSchema[]): SetSchemaAction => ({ type: SchemaActionEnum.SET_SCHEMA, payload }),
  setSchemaItem: (payload: IFetchedSchema): SetSchemaItemAction => ({ type: SchemaActionEnum.SET_SCHEMA_ITEM, payload }),
  createSchema: (name: string, fields: Array<IProperty>) => async (dispatch: AppDispatch) => {
    try {
      await createFormApi({ name, fields })
      const fetchedSchemas = await getFormsApi()
      dispatch(FormSchemaActionCreators.setSchema(fetchedSchemas));
    } catch (error) {
      console.log(error)
    }

  },
  fetchSchemas: () => async (dispatch: AppDispatch) => {
    try {
      const response = await getFormsApi()
      dispatch(FormSchemaActionCreators.setSchema(response));
    } catch (e) {
      console.log(e)
    }
  },
  fetchSchemaItem: (id: number) => async (dispatch: AppDispatch) => {
    try {
      const response = await getFormItemApi(id)
      dispatch(FormSchemaActionCreators.setSchemaItem(response));
    } catch (e) {
      console.log(e)
    }
  },
  updateSchemaItem: (id: number, schema: ISchema) => async (dispatch: AppDispatch) => {
    try {
      const response = await updateFormItemApi(id, schema)
    } catch (e) {
      console.log(e)
    }
  },
  removeSchemaItem: (id: number) => async (dispatch: AppDispatch) => {
    try {
      await removeFormItemApi(id)
      const fetchedSchemas = await getFormsApi()
      dispatch(FormSchemaActionCreators.setSchema(fetchedSchemas));
    } catch (e) {
      console.log(e)
    }
  }
}
