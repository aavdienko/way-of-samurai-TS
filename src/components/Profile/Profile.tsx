import React from 'react';
import { AppPropsType, PostsType } from '../../App';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';


export type ProfilePropsType = {
  posts: Array<PostsType>
}

const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.posts}/>
  </div>
  )
}

export default Profile