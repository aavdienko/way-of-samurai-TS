import { ActionTypes, PostsType, ProfilePageType } from './state';

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


type addPostACType = ReturnType<typeof addPostAC>;
type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>;

export type ProfileMainActionType = addPostACType | updateNewPostTextACType

export const profileReducer = (state: ProfilePageType, action: ActionTypes): ProfilePageType => {
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
    
    default: return state;
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
