import styles from './Users.module.css';
import { UserPhotoUrl } from '../../assets/photoUrls';
import { UserType, followThunkCreator, unFollowThunkCreator } from '../../redux/users-reducer';
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import { usersAPI } from '../../api/api';
import { Paginator } from '../../common/Paginator/Paginator';
import { User } from './User';

type UserPropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onClickHandler: (pageNumber: number) => void;
  users: UserType[];
  followRequest: Array<number>;
  followThunkCreator: (userId: number) => void;
  unFollowThunkCreator: (userId: number) => void;
};

export const Users = (props: UserPropsType) => {

  return (
    <div>
      <Paginator
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onClickHandler={props.onClickHandler}
      />
      {props.users.map((user) => (
        <div key={user.id}>
          <User user={user} followRequest={props.followRequest} followThunkCreator={props.followThunkCreator} unFollowThunkCreator={props.unFollowThunkCreator} />
        </div>))}

    </div>
  );
};
