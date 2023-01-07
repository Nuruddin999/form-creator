
import { createFormApi, getFormsApi, getFormItemApi, removeFormItemApi, updateFormItemApi } from './../../../api/form';
import { IFetchedSchema, ISchema, SchemaActionEnum, SetSchemaAction, SetSchemaItemAction, SetIsLoadingAction, SetErrorAction } from "./types";
import { IProperty } from "../../../models/IUser";
import { AppDispatch, RootState } from "../../index";
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

export const FormSchemaActionCreators = {
  setSchema: (payload: ISchema[]): SetSchemaAction => ({ type: SchemaActionEnum.SET_SCHEMA, payload }),
  setSchemaItem: (payload: ISchema): SetSchemaItemAction => ({ type: SchemaActionEnum.SET_SCHEMA_ITEM, payload }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: SchemaActionEnum.SET_IS_LOADING, payload }),
  setError: (payload: string): SetErrorAction => ({ type: SchemaActionEnum.SET_ERROR, payload }),
  createSchema: (name: string, fields: Array<IProperty>) => async (dispatch: AppDispatch) => {
    try {
      dispatch(FormSchemaActionCreators.setIsLoading(true));
      await createFormApi({ name, fields })
      dispatch(FormSchemaActionCreators.setIsLoading(false));
    } catch (error) {
    }

  },
  fetchSchemas: () => async (dispatch: AppDispatch) => {
    dispatch(FormSchemaActionCreators.setIsLoading(true));
    try {
      const response = await getFormsApi()
      dispatch(FormSchemaActionCreators.setSchema(response));
      dispatch(FormSchemaActionCreators.setIsLoading(false));
    } catch (e) {
      dispatch(FormSchemaActionCreators.setIsLoading(false));
    }
  },
  fetchSchemaItem: (id: string) => async (dispatch: AppDispatch) => {
    dispatch(FormSchemaActionCreators.setIsLoading(true));
    try {
      const response = await getFormItemApi(id)
      dispatch(FormSchemaActionCreators.setSchemaItem(response));
      dispatch(FormSchemaActionCreators.setIsLoading(false));
    } catch (e) {
      dispatch(FormSchemaActionCreators.setIsLoading(false));
    }
  },
  updateSchemaItem: (id: string, schema: ISchema) => async (dispatch: AppDispatch) => {
    try {
      await updateFormItemApi(id, schema)
    } catch (e) {
    }
  },
  removeSchemaItem: (id: string) => async (dispatch: AppDispatch) => {
    try {
      await removeFormItemApi(id)
      const fetchedSchemas = await getFormsApi()
      dispatch(FormSchemaActionCreators.setSchema(fetchedSchemas));
    } catch (e) {
    }
  }
}
