import { UserPhotoUrl } from '../assets/photoUrls';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type InitialStateType = {
  users: Array<UserType>;
};

// {
//   "name": "HoreyVer",
//   "id": 28566,
//   "uniqueUrlName": null,
//   "photos": {
//     "small": null,
//     "large": null
//   },
//   "status": null,
//   "followed": false
// },

export type UserType = {
  name: string;
  id: number;
  uniqueUrlName: any;
  photos: UserPhotoType;
  status?: string;
  followed: boolean;
};

type UserPhotoType = {
  small: any;
  large: any;
};

type LocationType = {
  city: string;
  country: string;
};

type FollowACType = ReturnType<typeof followAC>;

type UnFollowACType = ReturnType<typeof unFollowAC>;

type setUsersACType = ReturnType<typeof setUsersAC>;

type UsersMainActionType = setUsersACType | FollowACType | UnFollowACType;

const initialState: InitialStateType = {
  users: [
    // {id: 1, photoUrl: UserPhotoUrl, followed: true, fullName: 'Alex', status: 'Dad', location: {city: 'Prague', country: 'CZ'}},
    // {id: 2, photoUrl: UserPhotoUrl, followed: false, fullName: 'Lera', status: 'Mom', location: {city: 'Prague', country: 'CZ'}},
    // {id: 3, photoUrl: UserPhotoUrl, followed: false, fullName: 'Soko', status: 'Kot', location: {city: 'Prague', country: 'CZ'}},
    // {id: 4, photoUrl: UserPhotoUrl, followed: false, fullName: 'Crosby', status: 'Podsvinok', location: {city: 'Prague', country: 'CZ'}}
  ],
};

export const usersReducer = (
  state = initialState,
  action: UsersMainActionType
): InitialStateType => {
  switch (action.type) {
    case FOLLOW: {
      const stateCopy = {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...user, followed: true } : user
        ),
      };
      return stateCopy;
    }

    case UNFOLLOW: {
      const stateCopy = {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...user, followed: false } : user
        ),
      };
      return stateCopy;
    }

    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.payload.users],
      };
    }

    default:
      return state;
  }
};

export const followAC = (userId: number) => {
  return {
    type: FOLLOW,
    payload: {
      id: userId,
    },
  } as const;
};

export const unFollowAC = (userId: number) => {
  return {
    type: UNFOLLOW,
    payload: {
      id: userId,
    },
  } as const;
};

export const setUsersAC = (users: Array<UserType>) => {
  return {
    type: SET_USERS,
    payload: {
      users: users,
    },
  } as const;
};
