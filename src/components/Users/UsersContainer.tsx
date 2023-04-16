import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import {
  changeFollowRequest,
  changeIsFetching,
  follow,
  InitialStateType,
  setCurrentPage,
  setTotalCount,
  setUsers,
  unFollow,
  UserType,
} from '../../redux/users-reducer';
import React from 'react';

import { Users } from './Users';
import { Preloader } from '../../common/preloader/Preloader';
import { usersAPI } from '../../api/api';


type UsersMSTPType = InitialStateType;
type UsersMDTPType = {
  follow: (userId: number) => void;
  unFollow: (userId: number) => void;
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalCount: (totalUsersCount: number) => void;
  changeIsFetching: (isFetching: boolean) => void;
  changeFollowRequest: (followRequest: boolean, userId: number ) => void
};
export type UsersPropsType = UsersMSTPType & UsersMDTPType;

export class UsersClass extends React.Component<UsersPropsType> {
  // если передаем только пропсы в супер, можем это не писать, это происходит по умолчанию
  // constructor(props: UsersPropsType) {
  //   super(props)
  //   }

  // Отрабатывает одиг раз, поэтому все запросы нужно делать здесь
  componentDidMount(): void {
    this.props.changeIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.changeIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalCount(data.totalCount);
      });
  }

  // getUsers = () => {
  //   if (this.props.users.length === 0) {
  //     axios
  //       .get('https://social-network.samuraijs.com/api/1.0/users')
  //       .then((response) => this.props.setUsers(response.data.items));
  //   }
  // }

  //Переключение страниц пользователей 
  onClickHandler = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.changeIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then((data) => {
        this.props.changeIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalCount(data.totalCount);
      });
  };

  render() {
    const pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        {this.props.isFetching ? <Preloader/> : 
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onClickHandler={this.onClickHandler}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unFollow}
          changeFollowRequest={this.props.changeFollowRequest}
          followRequest={this.props.followRequest}
        />}
      </div>
    );

    // вынесли в User
    // (
    //   <div>
    //     <div>
    //       {pages.map((page, index) => {return <span key={index} className={this.props.currentPage === page ? styles.selectedPage : ''} onClick={()=> this.onClickHandler(page)}>{page}</span>})}
    //       {/* <span>1</span>
    //       <span>2</span>
    //       <span className={styles.selectedPage}>3</span>
    //       <span>4</span>
    //       <span>5</span> */}
    //     </div>
    //     {/* <button onClick={this.getUsers}>Get Users</button> */}
    //     {this.props.users.map((user) => (
    //       <div key={user.id}>
    //         <span>
    //           <div>
    //             <img
    //               src={user.photos.small ? user.photos.small : UserPhotoUrl}
    //               className={styles.photo}
    //             />
    //           </div>
    //           <div>
    //             {user.followed ? (
    //               <button onClick={() => this.props.unfollow(user.id)}>
    //                 Unfollow
    //               </button>
    //             ) : (
    //               <button onClick={() => this.props.follow(user.id)}>Follow</button>
    //             )}
    //           </div>
    //         </span>
    //         <span>
    //           <span>
    //             <div>{user.name}</div>
    //             <div>{user.status}</div>
    //           </span>
    //           {/* <span>
    //             <div>{user.location.country}</div>
    //             <div>{user.location.city}</div>
    //           </span> */}
    //         </span>
    //       </div>
    //     ))}
    //   </div>
    // );
  }
}

const mapStateToProps = (state: AppStateType): UsersMSTPType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followRequest: state.usersPage.followRequest,
  };
};

// переписаль MDTP на короткую запись, в которой мы просто передаем колбэки -  actioncreators.
// const mapDispatchToProps = (dispatch: Dispatch): UsersMDTPType => {
//   return {
//     follow: (userId: number) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId: number) => {
//       dispatch(unFollowAC(userId));
//     },
//     setUsers: (users: Array<UserType>) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (currentPage: number) => {
//       dispatch(setCurrentPageAC(currentPage));
//     },
//     setTotalCount: (totalUsersCount: number) => {
//       dispatch(setTotalCountAC(totalUsersCount));
//     },
//     changeIsFetching: (isFetching: boolean) => {
//       dispatch(changeIsFetchingAC(isFetching));
//     },
//   };
// };

export const UsersContainer = connect(
  mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setTotalCount, changeIsFetching, changeFollowRequest}
)(UsersClass);
