import { ActionTypes} from './store';

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

type addPostACType = ReturnType<typeof addPostAC>;
type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>;

export type ProfileMainActionType = addPostACType | updateNewPostTextACType;

type PostsType = {
  id: number;
  message: string;
  likesCount: number;
};

export type InitialStateType = {
  newPostText: string;
  posts: Array<PostsType>;
};

// Создали начальный стейт чтобы избжеать ощибок в начальной отрисовке
const initialState: InitialStateType = {
  posts: [
    { id: 1, message: 'Hi how are you?', likesCount: 20 },
    { id: 2, message: 'It is my first post', likesCount: 30 },
  ],
  newPostText: '',
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostsType = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };
      const stateCopy = {...state}
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      const stateCopy = {...state}
      stateCopy.newPostText = action.payload.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostAC = () => {
  return {
    type: ADD_POST,
  } as const;
};

export const updateNewPostTextAC = (newText: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    payload: { newText },
  } as const;
};
