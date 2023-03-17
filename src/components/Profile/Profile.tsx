import { PostsType, ProfilePageType } from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export type ProfilePropsType = {
  state: ProfilePageType;
  dispatch: (action: any) => void;
};

const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        posts={props.state.posts}
        newPostText={props.state.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
