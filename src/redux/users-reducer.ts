
import { UserPhotoUrl } from '../assets/photoUrls';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUN'
const CHANGE_IS_FETCHING = 'CHANGE_IS_FETCHING'
const CHANGE_FOLLOW_REQUEST = 'CHANGE_FOLLOW_REQUEST'

export type InitialStateType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean,
  followRequest: Array<number>
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

type FollowACType = ReturnType<typeof follow>;

type UnFollowACType = ReturnType<typeof unFollow>;

type setUsersACType = ReturnType<typeof setUsers>;

type setCurrentPageACType = ReturnType<typeof setCurrentPage>

type setTotalCountACType = ReturnType<typeof setTotalCount>

type changeIsFetchingACType = ReturnType<typeof changeIsFetching>

type changeFollowRequestACType = ReturnType<typeof changeFollowRequest>

type UsersMainActionType = setUsersACType | FollowACType | UnFollowACType | setCurrentPageACType |setTotalCountACType | changeIsFetchingACType | changeFollowRequestACType

const initialState: InitialStateType = {
  users: [],
  pageSize: 10, 
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followRequest: []
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

    case CHANGE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload.isFetching
      }
    }

    case CHANGE_FOLLOW_REQUEST: {
      return {
        ...state,
        followRequest: action.payload.followRequest
        ? [...state.followRequest, action.payload.userId]
        : state.followRequest.filter(id => id !== action.payload.userId)
      }
    }

    default:
      return state;
  }
};

export const follow = (userId: number) => {
  return {
    type: FOLLOW,
    payload: {
      id: userId,
    }
  } as const;
};

export const unFollow = (userId: number) => {
  return {
    type: UNFOLLOW,
    payload: {
      id: userId,
    }
  } as const;
};

export const setUsers = (users: Array<UserType>) => {
  return {
    type: SET_USERS,
    payload: {
      users: users,
    }
  } as const;
};

export const setCurrentPage = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: {
      currentPage,
    }
  } as const;
};

export const setTotalCount = (totalUsersCount: number) => {
  return {
    type: SET_TOTAL_COUNT,
    payload: {
      totalUsersCount,
    }
  } as const;
};

export const changeIsFetching = (isFetching: boolean) => {
  return {
    type: CHANGE_IS_FETCHING,
    payload: {
      isFetching,
    }
  } as const;
};

export const changeFollowRequest = (followRequest: boolean, userId: number) => {
  return {
    type: CHANGE_FOLLOW_REQUEST,
    payload: {
      followRequest,
      userId
    }
  } as const;
};