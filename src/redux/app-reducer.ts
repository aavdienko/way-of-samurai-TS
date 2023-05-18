import { AnyAction, Dispatch } from "redux";
import { authAPI } from "../api/api";
import { ThunkAction } from "redux-thunk";
import { AppActionsType, AppStateType, AppThunkType } from "./redux-store";
import { getAuthUserDataThunkCreator } from "./auth-reducer";

export const SUCCESSFULLY_INITIALIZED = 'SUCCESSFULLY-INITIALIZED';

type initializedSuccessType = ReturnType<typeof initializedSuccess>

export type AppMainActionType = initializedSuccessType


export type DataType = {
  id: null | number
  login: null | string
  email: null | string
  isAuth: boolean
}

export type InitialStateType = {
  initialized: boolean
};

// Создали начальный стейт чтобы избжеать ощибок в начальной отрисовке
const initialState: InitialStateType = {
  initialized: false
  }

export const appReducer = (state: InitialStateType = initialState, action: AppMainActionType): InitialStateType => {
  switch (action.type) {
    case SUCCESSFULLY_INITIALIZED: {
      return {
        ...state,
        initialized: true
      }
    }
    default:
      return state;
  }
};


export const initializedSuccess = () => {
  return {
    type: SUCCESSFULLY_INITIALIZED,
  } as const;
};

export const initializedAPPThunkCreator = (): AppThunkType => {
  return (dispatch) => {
    dispatch(getAuthUserDataThunkCreator())
      .then(()=>{
      dispatch(initializedSuccess())
    })

  };
};
