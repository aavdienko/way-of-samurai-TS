import { authReducer } from './auth-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { usersReducer } from './users-reducer';
import thunkMiddleWare from 'redux-thunk'

// соеденяем все редьюсеры в один с помощью combine reducer

export type AppStateType = ReturnType<typeof RootReducer>

const RootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
})


export const store = createStore(RootReducer, applyMiddleware(thunkMiddleWare))

// @ts-ignore
window.store = store;