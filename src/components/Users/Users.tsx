import styles from './Users.module.css';
import { UserPhotoUrl } from '../../assets/photoUrls';
import { UserType } from '../../redux/users-reducer';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { usersAPI } from '../../api/api';

type UserPropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onClickHandler: (pageNumber: number) => void;
  users: UserType[];
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  changeFollowRequest: (followRequest: boolean, userId: number ) => void
  followRequest: Array<number>,
};

export const Users = (props: UserPropsType) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];

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
        {/* <span>1</span>
        <span>2</span>
        <span className={styles.selectedPage}>3</span>
        <span>4</span>
        <span>5</span> */}
      </div>
      {/* <button onClick={this.getUsers}>Get Users</button> */}
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
                    props.changeFollowRequest(true, user.id)
                    usersAPI.unfollow(user.id)
                      .then((data) => {
                        if (data.resultCode == 0) {
                          props.unfollow(user.id);
                        }
                        props.changeFollowRequest(false, user.id)
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button disabled={props.followRequest.some(id => id === user.id)} onClick={() => {
                  props.changeFollowRequest(true, user.id)
                  usersAPI.follow(user.id)
                  // axios
                  //     .post(
                  //       `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                  //       {},
                  //       {
                  //         withCredentials: true, 
                  //         headers: {
                  //           'API-KEY': '149d62aa-bd4d-437d-ba09-e1ee03f78f90',
                  //         },
                  //       }
                  //     )
                      .then((data) => {
                        if (data.resultCode == 0) {
                          props.follow(user.id);
                        }
                        props.changeFollowRequest(false, user.id)
                      });
                }}>Follow</button>
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
