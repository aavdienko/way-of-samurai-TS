import { connect } from "react-redux"
import { Dispatch } from "redux"
import { AppStateType } from "../../redux/redux-store"
import { followAC, InitialStateType, setCurrentPageAC, setTotalCountAC, setUsersAC, unFollowAC, UserType } from "../../redux/users-reducer"
import { UsersClass } from "./UsersClass"


type UsersMSTPType = InitialStateType
type UsersMDTPType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
  setCurrentPage: (currentPage: number) => void
  setTotalCount: (totalUsersCount: number) => void
}
export type UsersPropsType = UsersMSTPType & UsersMDTPType

const mapStateToProps = (state: AppStateType): UsersMSTPType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): UsersMDTPType => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId: number) => {
      dispatch(unFollowAC(userId))
    },
    setUsers: (users: Array<UserType>) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage: number) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalCount: (totalUsersCount: number) => {
      dispatch(setTotalCountAC(totalUsersCount))
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)