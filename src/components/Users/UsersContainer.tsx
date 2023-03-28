import { connect } from "react-redux"
import { Dispatch } from "redux"
import { AppStateType } from "../../redux/redux-store"
import { followAC, InitialStateType, setUsersAC, unFollowAC, UserType } from "../../redux/users-reducer"
import { Users } from "./Users"


type UsersMSTPType = InitialStateType
type UsersMDTPType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
}
export type UsersPropsType = UsersMSTPType & UsersMDTPType

const mapStateToProps = (state: AppStateType): UsersMSTPType => {
  return {
    users: state.usersPage.users
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
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)