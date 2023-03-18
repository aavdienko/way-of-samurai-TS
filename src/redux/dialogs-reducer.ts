import {ActionTypes } from './store';

export const ADD_MESSAGE = 'ADD-MESSAGE';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

type addMessageACType = ReturnType<typeof addMessageAC>;
type updateNewMessageTextAC = ReturnType<typeof updateNewMessageTextAC>;
export type DialogsMainActionType = addMessageACType | updateNewMessageTextAC;

type MessagesType = {
  id: number;
  message: string;
};
type DialogsType = {
  name: string;
  id: number;
};

export type InitialStateType = {
  dialogs: Array<DialogsType>;
  messages: Array<MessagesType>;
  newMessageText: string;
};

const initialState: InitialStateType = {
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
  newMessageText: 'New Message placeholder',
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage: MessagesType = {
        id: 5,
        message: state.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: ''
      }

    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.payload.newMessageText
      }
    }
    default:
      return state;
  }
};

export const addMessageAC = () => {
  return {
    type: ADD_MESSAGE,
  } as const;
};

export const updateNewMessageTextAC = (newMessageText: string) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    payload: { newMessageText },
  } as const;
};
