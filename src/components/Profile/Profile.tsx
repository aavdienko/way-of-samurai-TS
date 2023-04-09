
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';
import { ProfilePropsType } from './ProfileContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

// export type ProfilePropsType = {
//   state: ProfilePageType;
//   dispatch: (action: any) => void;
// };

const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer
      />
    </div>
  );
};

export default Profile;
