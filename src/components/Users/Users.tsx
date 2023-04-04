import styles from './Users.module.css';
import { UserPhotoUrl } from '../../assets/photoUrls';
import { UserType } from '../../redux/users-reducer';

type UserPropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onClickHandler: (pageNumber: number) => void
  users: UserType[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}


export const Users = (props: UserPropsType) => {

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  const pages = []

  for(let i = 1; i <= pagesCount; i++){
    pages.push(i)
  }


  return (
    <div>
      <div>
        {pages.map((page, index) => {return <span key={index} className={props.currentPage === page ? styles.selectedPage : ''} onClick={()=> props.onClickHandler(page)}>{page}</span>})}
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
              <img
                src={user.photos.small ? user.photos.small : UserPhotoUrl}
                className={styles.photo}
              />
            </div>
            <div>
              {user.followed ? (
                <button onClick={() => props.unfollow(user.id)}>
                  Unfollow
                </button>
              ) : (
                <button onClick={() => props.follow(user.id)}>Follow</button>
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
}