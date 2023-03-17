import {ProfileMainActionType, profileReducer} from './profile-reducer';
import {DialogsMainActionType, dialogsReducer} from './dialogs-reducer';
export type StoreType = {
  _state: StateType;
  getState: () => StateType;
  _rerenderEntireTree: (state: StateType) => void;
  subscribe: (observer: (state: StateType) => void) => void;
  dispatch: (action: any) => void;
};
export type StateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
};
export type ProfilePageType = {
  newPostText: string;
  posts: Array<PostsType>;
};
export type DialogsPageType = {
  dialogs: Array<DialogsType>;
  messages: Array<MessagesType>;
  newMessageText: string;
};
export type PostsType = {
  id: number;
  message: string;
  likesCount: number;
};
export type MessagesType = {
  id: number;
  message: string;
};
export type DialogsType = {
  name: string;
  id: number;
};
export type ActionTypes = ProfileMainActionType | DialogsMainActionType



export const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi how are you?', likesCount: 20 },
        { id: 2, message: 'It is my first post', likesCount: 30 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Lera' },
        { id: 3, name: 'Schoko' },
        { id: 4, name: 'Crosby' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'I am Crosby!' },
        { id: 4, message: 'Yo!' },
      ],
      newMessageText: '',
    },
  },
  _rerenderEntireTree(state: StateType) {
    console.log('state was changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer: (state: StateType) => void) {
    this._rerenderEntireTree = observer;
  },
  dispatch(action: ActionTypes) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);


    this._rerenderEntireTree(this._state);
  },
};

// создали функцию с таким же названием чтобы потом переопределить ее значение на  observer, который является оригинальным rerenderEntireTree переданным из state. Таким образом мы збежали циклической зависимости.
// let rerenderEntireTree = (state: StateType) =>{
//   console.log('state was changed')}

