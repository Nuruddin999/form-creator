import { IUser } from './../models/IUser';
import {  formApi } from './index';

export const loginApi = async (body: IUser) => {
  const response = await formApi.post('/auth/login', {
    ...body
  })
  return response.data
}
export const signupApi = async (body: IUser) => {
  const response = await formApi.post('/auth/signup', {
    ...body
  })
  return response.data
}

