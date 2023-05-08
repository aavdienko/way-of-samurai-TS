export const ADD_MESSAGE = 'ADD-MESSAGE';

type addMessageACType = ReturnType<typeof addMessageAC>;
export type DialogsMainActionType = addMessageACType

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
  ]
}

export const dialogsReducer = (state: InitialStateType = initialState, action: DialogsMainActionType): InitialStateType => {

  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage: MessagesType = {
        id: 5,
        message: action.payload.newMessageBody,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      }
    }
    default:
      return state;
  }
};

export const addMessageAC = (newMessageBody: string) => {
  return {
    type: ADD_MESSAGE,
    payload: { newMessageBody },
  } as const;
};
