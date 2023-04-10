
export const SET_USER_DATA = 'SET-USER-DATA';

type setUserDataProfileType = ReturnType<typeof setUserData>

export type AuthMainActionType = setUserDataProfileType


export type DataType = {
  id: null | number
  login: null | string
  email: null | string
}

export type InitialStateType = {
  id: null | number
  login: null | string
  email: null | string
  isAuth: boolean
};

// Создали начальный стейт чтобы избжеать ощибок в начальной отрисовке
const initialState: InitialStateType = {
  id: null,
  login: null,
  email: null,
  isAuth: false
  }

export const authReducer = (state: InitialStateType = initialState, action: AuthMainActionType): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload.data,
        isAuth: true
      }
    }
    default:
      return state;
  }
};


export const setUserData = (data: DataType) => {
  return {
    type: SET_USER_DATA,
    payload: { data }
  } as const;
};