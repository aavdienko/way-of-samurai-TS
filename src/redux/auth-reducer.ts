import { AnyAction, Dispatch } from 'redux';
import { authAPI } from '../api/api';
import { ThunkAction } from 'redux-thunk';
import { AppActionsType, AppStateType, AppThunkType } from './redux-store';

export const SET_USER_DATA = 'auth/SET-USER-DATA';

type setUserDataProfileType = ReturnType<typeof setUserData>;

export type AuthMainActionType = setUserDataProfileType;

export type DataType = {
  id: null | number;
  login: null | string;
  email: null | string;
  isAuth: boolean;
};

export type InitialStateType = {
  id: null | number;
  login: null | string;
  email: null | string;
  isAuth: boolean;
};

// Создали начальный стейт чтобы избжеать ощибок в начальной отрисовке
const initialState: InitialStateType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

export const authReducer = (state: InitialStateType = initialState, action: AuthMainActionType): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload.data,
        isAuth: action.payload.isAuth,
      };
    }
    default:
      return state;
  }
};

export const setUserData = (data: DataType, isAuth: boolean) => {
  return {
    type: SET_USER_DATA,
    payload: { data, isAuth },
  } as const;
};

export const getAuthUserDataThunkCreator = () => {
  return async (dispatch: Dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
      dispatch(setUserData(response.data.data, true));
    }
  };
};

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean): AppThunkType => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserDataThunkCreator());
    }
  };
};

export const logoutThunkCreator = (): AppThunkType => {
  return async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setUserData(response.data.data, false));
    }
  };
};
