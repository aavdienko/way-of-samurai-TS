import { AuthMainActionType, authReducer } from './auth-reducer';
import { DialogsMainActionType, dialogsReducer } from './dialogs-reducer';
import { ProfileMainActionType, profileReducer } from './profile-reducer';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { usersReducer } from './users-reducer';
import thunkMiddleWare, { ThunkAction } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form';
import { AppMainActionType, appReducer } from './app-reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

// соеденяем все редьюсеры в один с помощью combine reducer

export type AppStateType = ReturnType<typeof RootReducer>

const RootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})


export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunkMiddleWare)))


// @ts-ignore
window.store = store;

export type AppActionsType = ProfileMainActionType | DialogsMainActionType | AuthMainActionType | AppMainActionType

// тип для диспатча санки в санке

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>