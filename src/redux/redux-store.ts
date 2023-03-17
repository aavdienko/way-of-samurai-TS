import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';
import { combineReducers, createStore } from "redux";

// соеденяем все редьюсеры в один с помощью combine reducer
const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
})

export const store = createStore(reducers)

