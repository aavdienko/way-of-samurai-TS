export type StoreType = {
  _state: StateType;
  getState: () => StateType;
  _rerenderEntireTree: (state: StateType) => void;
  subscribe: (observer: (state: StateType) => void) => void;
  dispatch: (action: any) => void
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
  newMessageText: string
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
export type ActionTypes = addPostACType | updateNewPostTextACType | addMessageACType | updateNewMessageTextAC

type addPostACType = ReturnType<typeof addPostAC>
type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
type addMessageACType = ReturnType<typeof addMessageAC>
type updateNewMessageTextAC = ReturnType<typeof updateNewMessageTextAC>

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

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
      newMessageText: ''
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
  dispatch (action: ActionTypes) {
    switch (action.type) {
      case ADD_POST: {
        let newPost: PostsType = {
          id: 3,
          message: this._state.profilePage.newPostText,
          likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree(this._state);
        return this._state
      }
      case UPDATE_NEW_POST_TEXT: {
        this._state.profilePage.newPostText = action.payload.newText;
        this._rerenderEntireTree(this._state);
        return this._state
      }
      case ADD_MESSAGE: {
        let newMessage: MessagesType = {
          id: 5,
          message: this._state.dialogsPage.newMessageText,
        };        
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._rerenderEntireTree(this._state);
        return this._state
      }
      case UPDATE_NEW_MESSAGE_TEXT: {

        this._state.dialogsPage.newMessageText = action.payload.newMessageText;
        this._rerenderEntireTree(this._state);
        return this._state
      }
      default: return this._state
    }
  },
};

// создали функцию с таким же названием чтобы потом переопределить ее значение на  observer, который является оригинальным rerenderEntireTree переданным из state. Таким образом мы збежали циклической зависимости.
// let rerenderEntireTree = (state: StateType) =>{
//   console.log('state was changed')}


export const addPostAC = () => {
  return {
    type: ADD_POST
  } as const 
}

export const updateNewPostTextAC = (newText: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT, 
    payload: {newText}
  } as const 
}

export const addMessageAC = () => {
  return {
    type: ADD_MESSAGE 
  } as const 
}

export const updateNewMessageTextAC = (newMessageText: string) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT, 
    payload: {newMessageText}
  } as const 
}

