import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
import { ActionTypes, ProfilePageType } from '../../../redux/store';
import { StoreContext } from '../../../StoreContext';
import MyPosts from './MyPosts';


interface MyPostsPropsType extends ProfilePageType {
  dispatch: (action: ActionTypes) => void;
}

const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>
      { (store) => {
        const state = store.getState().profilePage

        const addPostHandler = () => {
          store.dispatch(addPostAC());
        };
      
        const onPostChangeHandler = (newText: string) => {
          store.dispatch(updateNewPostTextAC(newText));
        };

        return <MyPosts posts={state.posts} newPostText={state.newPostText} updateNewPostText={onPostChangeHandler} addPost={addPostHandler} />
        }
      }
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
