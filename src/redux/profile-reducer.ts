import { ActionTypes, PostsType, ProfilePageType } from './store';

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

type addPostACType = ReturnType<typeof addPostAC>;
type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>;

export type ProfileMainActionType = addPostACType | updateNewPostTextACType;

// Создали начальный стейт чтобы избжеать ощибок в начальной отрисовке
const initialState: ProfilePageType = {
  posts: [
    { id: 1, message: 'Hi how are you?', likesCount: 20 },
    { id: 2, message: 'It is my first post', likesCount: 30 },
  ],
  newPostText: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost: PostsType = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    }
    case UPDATE_NEW_POST_TEXT: {
      state.newPostText = action.payload.newText;
      return state;
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
