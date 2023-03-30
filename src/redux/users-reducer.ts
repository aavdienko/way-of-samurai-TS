import { UserPhotoUrl } from '../assets/photoUrls';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUN'

export type InitialStateType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
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

type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>

type setTotalCountACType = ReturnType<typeof setTotalCountAC>

type UsersMainActionType = setUsersACType | FollowACType | UnFollowACType | setCurrentPageACType |setTotalCountACType

const initialState: InitialStateType = {
  users: [],
  pageSize: 10, 
  totalUsersCount: 0,
  currentPage: 1,
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
        users: action.payload.users
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload.currentPage
      }
    }

    case SET_TOTAL_COUNT: {
      return {
        ...state,
        totalUsersCount: action.payload.totalUsersCount
      }
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
    }
  } as const;
};

export const unFollowAC = (userId: number) => {
  return {
    type: UNFOLLOW,
    payload: {
      id: userId,
    }
  } as const;
};

export const setUsersAC = (users: Array<UserType>) => {
  return {
    type: SET_USERS,
    payload: {
      users: users,
    }
  } as const;
};

export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: {
      currentPage,
    }
  } as const;
};

export const setTotalCountAC = (totalUsersCount: number) => {
  return {
    type: SET_TOTAL_COUNT,
    payload: {
      totalUsersCount,
    }
  } as const;
};
