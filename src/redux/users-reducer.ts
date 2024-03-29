import { Dispatch } from 'redux';
import { UserPhotoUrl } from '../assets/photoUrls';
import { usersAPI } from '../api/api';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUN';
const CHANGE_IS_FETCHING = 'users/CHANGE_IS_FETCHING';
const CHANGE_FOLLOW_REQUEST = 'users/CHANGE_FOLLOW_REQUEST';

export type InitialStateType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followRequest: Array<number>;
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

type setCurrentPageACType = ReturnType<typeof setCurrentPage>;

type setTotalCountACType = ReturnType<typeof setTotalCount>;

type changeIsFetchingACType = ReturnType<typeof changeIsFetching>;

type changeFollowRequestACType = ReturnType<typeof changeFollowRequest>;


type UsersMainActionType =
  | setUsersACType
  | FollowACType
  | UnFollowACType
  | setCurrentPageACType
  | setTotalCountACType
  | changeIsFetchingACType
  | changeFollowRequestACType;

const initialState: InitialStateType = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followRequest: [],
};

export const usersReducer = (state = initialState, action: UsersMainActionType): InitialStateType => {
  switch (action.type) {
    case FOLLOW: {
      const stateCopy = {
        ...state,
        users: state.users.map((user) => (user.id === action.payload.id ? { ...user, followed: true } : user)),
      };
      return stateCopy;
    }

    case UNFOLLOW: {
      const stateCopy = {
        ...state,
        users: state.users.map((user) => (user.id === action.payload.id ? { ...user, followed: false } : user)),
      };
      return stateCopy;
    }

    case SET_USERS: {
      return {
        ...state,
        users: action.payload.users,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload.currentPage,
      };
    }

    case SET_TOTAL_COUNT: {
      return {
        ...state,
        totalUsersCount: action.payload.totalUsersCount,
      };
    }

    case CHANGE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload.isFetching,
      };
    }

    case CHANGE_FOLLOW_REQUEST: {
      return {
        ...state,
        followRequest: action.payload.followRequest
          ? [...state.followRequest, action.payload.userId]
          : state.followRequest.filter((id) => id !== action.payload.userId),
      };
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
    },
  } as const;
};

export const unFollow = (userId: number) => {
  return {
    type: UNFOLLOW,
    payload: {
      id: userId,
    },
  } as const;
};

export const setUsers = (users: Array<UserType>) => {
  return {
    type: SET_USERS,
    payload: {
      users: users,
    },
  } as const;
};

export const setCurrentPage = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: {
      currentPage,
    },
  } as const;
};

export const setTotalCount = (totalUsersCount: number) => {
  return {
    type: SET_TOTAL_COUNT,
    payload: {
      totalUsersCount,
    },
  } as const;
};

export const changeIsFetching = (isFetching: boolean) => {
  return {
    type: CHANGE_IS_FETCHING,
    payload: {
      isFetching,
    },
  } as const;
};

export const changeFollowRequest = (followRequest: boolean, userId: number) => {
  return {
    type: CHANGE_FOLLOW_REQUEST,
    payload: {
      followRequest,
      userId,
    },
  } as const;
};

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(changeIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(changeIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
  };
};

export const getNewUsersPageTC = (pageNumber: number, usersOnPage: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(changeIsFetching(true));
    dispatch(setCurrentPage(pageNumber));
    let data = await usersAPI.getUsers(pageNumber, usersOnPage);
    dispatch(setUsers(data.items));
    dispatch(changeIsFetching(false));
  };
};

const followUnfollow = async (dispatch: Dispatch, userId: number, apiMethod: (userId: number) => any, actionCreator: (userId: number) => UsersMainActionType) => {
  dispatch(changeFollowRequest(true, userId));
  let data = await apiMethod(userId)
    if (data.resultCode == 0) {
      dispatch(actionCreator(userId));
    }
    dispatch(changeFollowRequest(false, userId));
}

export const unFollowThunkCreator = (userId: number) => {
  return async (dispatch: Dispatch) => {
    const apiMethod = usersAPI.unfollow.bind(usersAPI)
    const actionCreator = unFollow
    followUnfollow(dispatch, userId, apiMethod, actionCreator)
    // dispatch(changeFollowRequest(true, userId));
    // let data = await apiMethod(userId);
    // if (data.resultCode == 0) {
    //   dispatch(actionCreator(userId));
    // }
    // dispatch(changeFollowRequest(false, userId));
  };
};

export const followThunkCreator = (userId: number) => {
  return async (dispatch: Dispatch) => {
    const apiMethod = usersAPI.follow.bind(usersAPI)
    const actionCreator = follow
    followUnfollow(dispatch, userId, apiMethod, actionCreator)
    // dispatch(changeFollowRequest(true, userId));
    // let data = await apiMethod(userId)
    //   if (data.resultCode == 0) {
    //     dispatch(actionCreator(userId));
    //   }
    //   dispatch(changeFollowRequest(false, userId));
  };
};
