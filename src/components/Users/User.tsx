import styles from './Users.module.css';
import { UserPhotoUrl } from '../../assets/photoUrls';
import { UserType, followThunkCreator, unFollowThunkCreator } from '../../redux/users-reducer';
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import { usersAPI } from '../../api/api';
import { Paginator } from '../../common/Paginator/Paginator';

type UserPropsType = {
  user: UserType;
  followRequest: Array<number>;
  followThunkCreator: (userId: number) => void;
  unFollowThunkCreator: (userId: number) => void;
};

export const User = (props: UserPropsType) => {
  const user = props.user;

  return (
    <div>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small ? user.photos.small : UserPhotoUrl} className={styles.photo} />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={props.followRequest.some((id) => id === user.id)}
              onClick={() => {
                props.unFollowThunkCreator(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followRequest.some((id) => id === user.id)}
              onClick={() => {
                props.followThunkCreator(user.id);
              }}
            >
              Follow
            </button>
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
  );
};
