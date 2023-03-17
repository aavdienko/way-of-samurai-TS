import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
import { ActionTypes, ProfilePageType } from '../../../redux/store';
import MyPosts from './MyPosts';


interface MyPostsPropsType extends ProfilePageType {
  dispatch: (action: ActionTypes) => void;
}

const MyPostsContainer = (props: MyPostsPropsType) => {

  const addPostHandler = () => {
    props.dispatch(addPostAC());
  };

  const onPostChangeHandler = (newText: string) => {
    props.dispatch(updateNewPostTextAC(newText));
  };

  return (
    <MyPosts posts={props.posts} newPostText={props.newPostText} updateNewPostText={onPostChangeHandler} addPost={addPostHandler} />
  );
};

export default MyPostsContainer;
