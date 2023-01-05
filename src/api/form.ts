

import { ISchema } from "../store/reducers/formschema/types";
import { formApi } from "./index";


export const createFormApi = async (schema: ISchema) => {

  const response = await formApi.post('/form', {
    schema
  }, { headers:{
    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
  } })
  return response.data
}
export const getFormsApi = async () => {
  const response = await formApi.get('/form', { headers:{
    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
  } })
  return response.data
}
export const getFormItemApi = async (id: number) => {
  const response = await formApi.get(`/form/${id}`, { headers:{
    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
  }})
  return response.data
}
export const removeFormItemApi = async (id: number) => {
  const response = await formApi.delete(`/form/${id}`, { headers:{
    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
  } })
  return response.data
}

export const updateFormItemApi = async (id: number, schema: ISchema) => {
  const response = await formApi.post(`/form/${id}`, {
    schema
  })
  return response.data
}