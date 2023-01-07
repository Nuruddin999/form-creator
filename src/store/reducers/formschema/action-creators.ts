
import { createFormApi, getFormsApi, getFormItemApi, removeFormItemApi, updateFormItemApi } from './../../../api/form';
import {  ISchema, SchemaActionEnum, SetSchemaAction, SetSchemaItemAction, SetIsLoadingAction, SetErrorAction } from "./types";
import { IProperty } from "../../../models/IUser";
import { AppDispatch, RootState } from "../../index";

export const FormSchemaActionCreators = {
  setSchema: (payload: ISchema[]): SetSchemaAction => ({ type: SchemaActionEnum.SET_SCHEMA, payload }),
  setSchemaItem: (payload: ISchema): SetSchemaItemAction => ({ type: SchemaActionEnum.SET_SCHEMA_ITEM, payload }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: SchemaActionEnum.SET_IS_LOADING, payload }),
  setError: (payload: string): SetErrorAction => ({ type: SchemaActionEnum.SET_ERROR, payload }),
  createSchema: (name: string, fields: Array<IProperty>) => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(FormSchemaActionCreators.setIsLoading(true));
      await createFormApi({ name, fields }, getState().auth.user.uid)
      dispatch(FormSchemaActionCreators.setIsLoading(false));
    } catch (error) {
    }

  },
  fetchSchemas: () => async (dispatch: AppDispatch,getState: () => RootState) => {
    dispatch(FormSchemaActionCreators.setIsLoading(true));
    try {
      const response = await getFormsApi(getState().auth.user.uid)
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
  removeSchemaItem: (id: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      await removeFormItemApi(id)
      const fetchedSchemas = await getFormsApi(getState().auth.user.uid)
      dispatch(FormSchemaActionCreators.setSchema(fetchedSchemas));
    } catch (e) {
    }
  }
}
