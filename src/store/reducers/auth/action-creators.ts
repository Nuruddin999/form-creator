import { loginApi, signupApi, logOut } from './../../../api/user';
import { AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types";
import { IUser } from "../../../models/IUser";
import { AppDispatch } from "../../index";
import axios from "axios";
import UserService from "../../../api/UserService";
import { getAuth, signOut } from 'firebase/auth';

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload }),
  setError: (payload: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload }),
  signup: (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      await signupApi(email, password)
      dispatch(AuthActionCreators.setIsLoading(false));
    } catch (e) {
      dispatch(AuthActionCreators.setIsLoading(false));
      dispatch(AuthActionCreators.setError('Произошла ошибка'))
    }
  },
  login: (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      const response = await loginApi(email, password)
      if (response.uid && response.email) {
        dispatch(AuthActionCreators.setIsAuth(true));
        dispatch(AuthActionCreators.setUser({ uid: response.uid, email: response.email }));
        dispatch(AuthActionCreators.setIsLoading(false));
      }
    } catch (e: any) {
      dispatch(AuthActionCreators.setIsLoading(false));
      const errorMessage = e.message === 'Firebase: Error (auth/wrong-password).' ? 'неверный пароль' : 'Пользователь не найден'
      dispatch(AuthActionCreators.setError(errorMessage))
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    try {
      await logOut()
      dispatch(AuthActionCreators.setUser({} as IUser));
      dispatch(AuthActionCreators.setIsAuth(false));
    } catch (error) {

    }
  },
  isLoggedinAction: () => (dispatch: AppDispatch) => {
    dispatch(AuthActionCreators.setIsLoading(true));
    try {
      getAuth().onAuthStateChanged(user => {
        if (user?.email && user.uid) {
          dispatch(AuthActionCreators.setUser({ uid: user.uid, email: user.email }));
          dispatch(AuthActionCreators.setIsAuth(true));
        }
        dispatch(AuthActionCreators.setIsLoading(false));
      })
    } catch (error) {
      dispatch(AuthActionCreators.setIsLoading(false));
    }
  }
}
