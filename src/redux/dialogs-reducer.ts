import { MessagesType, DialogsPageType, ActionTypes } from './state';

export const ADD_MESSAGE = 'ADD-MESSAGE'
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


type addMessageACType = ReturnType<typeof addMessageAC>;
type updateNewMessageTextAC = ReturnType<typeof updateNewMessageTextAC>;
export type DialogsMainActionType = addMessageACType | updateNewMessageTextAC

export const dialogsReducer = (state: DialogsPageType, action: ActionTypes): DialogsPageType => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage: MessagesType = {
        id: 5,
        message: state.newMessageText,
      };        
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      state.newMessageText = action.payload.newMessageText;
      return state
    }
    default: return state
  }
}


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
