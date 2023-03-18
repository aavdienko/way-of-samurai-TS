
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

// export type ProfilePropsType = {
//   state: ProfilePageType;
//   dispatch: (action: any) => void;
// };

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer

      />
    </div>
  );
};

export default Profile;
