export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const SET_USER_PROFILE = 'SET-USER-PROFILE';

type addPostACType = ReturnType<typeof addPostAC>;
type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>;
type setUserProfileType = ReturnType<typeof setUserProfile>

export type ProfileMainActionType = addPostACType | updateNewPostTextACType | setUserProfileType

type PostsType = {
  id: number;
  message: string;
  likesCount: number;
};

export type ProfileType = {
  aboutMe: string
  contacts: ProfileContactsType
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: ProfilePhotosType
}
type ProfilePhotosType = {
  small: string
  large: string 
}
type ProfileContactsType = {
  facebook: string | null
  website: string | null
  vk: string | null
  twitter: string | null
  instagram: string | null
  youtube: string | null
  github: string | null
  mainLink: string | null
}

export type InitialStateType = {
  newPostText: string;
  posts: Array<PostsType>;
  profile: ProfileType | null
};

// Создали начальный стейт чтобы избжеать ощибок в начальной отрисовке
const initialState: InitialStateType = {
  posts: [
    { id: 1, message: 'Hi how are you?', likesCount: 20 },
    { id: 2, message: 'It is my first post', likesCount: 30 },
  ],
  newPostText: 'New Post placeholder',
  profile: null
  }

export const profileReducer = (state: InitialStateType = initialState, action: ProfileMainActionType): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostsType = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
        newPostText: ''
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.payload.newText
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.payload.profile
      }
    }
    default:
      return state;
  }
};

export const addPostAC = () => {
  return {
    type: ADD_POST
  } as const;
};

export const updateNewPostTextAC = (newText: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    payload: { newText }
  } as const;
};

export const setUserProfile = (profile: ProfileType) => {
  return {
    type: SET_USER_PROFILE,
    payload: { profile }
  } as const;
};