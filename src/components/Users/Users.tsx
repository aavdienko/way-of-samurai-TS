import styles from './Users.module.css';
import { UserPhotoUrl } from '../../assets/photoUrls';
import { UserType, followThunkCreator, unFollowThunkCreator } from '../../redux/users-reducer';
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import { usersAPI } from '../../api/api';

type UserPropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onClickHandler: (pageNumber: number) => void;
  users: UserType[];
  followRequest: Array<number>,
  followThunkCreator: (userId: number) => void
  unFollowThunkCreator: (userId: number) => void
};

export const Users = (props: UserPropsType) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];

  // if(!props.isAuth){
  //   return <Redirect to={'/login'}/>
  // }

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((page, index) => {
          return (
            <span
              key={index}
              className={props.currentPage === page ? styles.selectedPage : ''}
              onClick={() => props.onClickHandler(page)}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + user.id}>
                <img
                  src={user.photos.small ? user.photos.small : UserPhotoUrl}
                  className={styles.photo}
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  disabled={props.followRequest.some(id => id === user.id)}
                  onClick={() => {
                    props.unFollowThunkCreator(user.id)
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button disabled={props.followRequest.some(id => id === user.id)} 
                  onClick={() => {props.followThunkCreator(user.id)}}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            {/* <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span> */}
          </span>
        </div>
      ))}
    </div>
  );
};
