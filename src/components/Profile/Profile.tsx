import React from 'react';
import { PostsType, ProfilePageType } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';


export type ProfilePropsType = {
  state: ProfilePageType
}

const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts}/>
  </div>
  )
}

export default Profile