import { UsersPropsType } from './UsersContainer';
import styles from './Users.module.css';
import { UserPhotoUrl } from '../../assets/photoUrls';
import axios from 'axios';
import React from 'react';

export class UsersClass extends React.Component<UsersPropsType> {

  // если передаем только пропсы в супер, можем это не писать, это происходит по умолчанию
  // constructor(props: UsersPropsType) {
  //   super(props)
  //   }


    // Отрабатывает одиг раз, поэтому все запросы нужно делать здесь
    componentDidMount(): void {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items)
          this.props.setTotalCount(response.data.totalCount)});
    }
  
  // getUsers = () => {
  //   if (this.props.users.length === 0) {
  //     axios
  //       .get('https://social-network.samuraijs.com/api/1.0/users')
  //       .then((response) => this.props.setUsers(response.data.items));
  //   }
  // }

  onClickHandler = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items)
          this.props.setTotalCount(response.data.totalCount)})
  }

  render() {
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    const pages = []

    for(let i = 1; i <= pagesCount; i++){
      pages.push(i)
    }

    return (
      <div>
        <div>
          {pages.map((page, index) => {return <span key={index} className={this.props.currentPage === page ? styles.selectedPage : ''} onClick={()=> this.onClickHandler(page)}>{page}</span>})}
          {/* <span>1</span>
          <span>2</span>
          <span className={styles.selectedPage}>3</span>
          <span>4</span>
          <span>5</span> */}
        </div>
        {/* <button onClick={this.getUsers}>Get Users</button> */}
        {this.props.users.map((user) => (
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
                  <button onClick={() => this.props.unfollow(user.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => this.props.follow(user.id)}>Follow</button>
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
  
}