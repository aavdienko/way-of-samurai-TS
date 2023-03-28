import { UsersPropsType } from "./UsersContainer"
import styles from './Users.module.css';
import { UserPhotoUrl } from "../../support/photoUrls";


export const Users = (props: UsersPropsType) => {

  if(props.users.length === 0)

  props.setUsers( [
    {id: 1, photoUrl: UserPhotoUrl, followed: true, fullName: 'Alex', status: 'Dad', location: {city: 'Prague', country: 'CZ'}},
    {id: 2, photoUrl: UserPhotoUrl, followed: false, fullName: 'Lera', status: 'Mom', location: {city: 'Prague', country: 'CZ'}},
    {id: 3, photoUrl: UserPhotoUrl, followed: false, fullName: 'Soko', status: 'Kot', location: {city: 'Prague', country: 'CZ'}},
    {id: 4, photoUrl: UserPhotoUrl, followed: false, fullName: 'Crosby', status: 'Podsvinok', location: {city: 'Prague', country: 'CZ'}}
  ])
  return (
    <div>
      {props.users.map((user => 
        <div key={user.id}>
          <span>
            <div>
              <img src={user.photoUrl} className={styles.photo}/>
            </div>
            <div>
              {user.followed 
              ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button> 
              : <button onClick={() => props.follow(user.id)} >Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
          </span>


        </div>))}
    </div>

  )
}