import { MessagesType, DialogsPageType, ActionTypes } from './store';

export const ADD_MESSAGE = 'ADD-MESSAGE';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

type addMessageACType = ReturnType<typeof addMessageAC>;
type updateNewMessageTextAC = ReturnType<typeof updateNewMessageTextAC>;
export type DialogsMainActionType = addMessageACType | updateNewMessageTextAC;

const initialState: DialogsPageType = {
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
}

export const dialogsReducer = ( state: DialogsPageType = initialState, action: ActionTypes): DialogsPageType => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage: MessagesType = {
        id: 5,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      state.newMessageText = action.payload.newMessageText;
      return state;
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
