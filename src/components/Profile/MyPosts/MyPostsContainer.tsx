import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addPostAC, InitialStateType } from '../../../redux/profile-reducer';
import { AppStateType } from '../../../redux/redux-store';

import MyPosts from './MyPosts';


// interface MyPostsPropsType extends ProfilePageType {
//   dispatch: (action: ActionTypes) => void;
// }

// const MyPostsContainer = () => {

//   return (
//     <StoreContext.Consumer>
//       { (store) => {
//         const state = store.getState().profilePage

//         const addPostHandler = () => {
//           store.dispatch(addPostAC());
//         };
      
//         const onPostChangeHandler = (newText: string) => {
//           store.dispatch(updateNewPostTextAC(newText));
//         };

//         return <MyPosts posts={state.posts} newPostText={state.newPostText} updateNewPostText={onPostChangeHandler} addPost={addPostHandler} />
//         }
//       }
//     </StoreContext.Consumer>
//   );
// };

type MyPostsMSTPType = InitialStateType

type MyPostsMDTPType = {
  addPost: (newPostBody: string) => void
}

export type MyPostsPropsType = MyPostsMSTPType & MyPostsMDTPType

const mapStateToProps = (state: AppStateType): MyPostsMSTPType => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MyPostsMDTPType => {
  return {
    addPost: (newPostBody: string) => {
      dispatch(addPostAC(newPostBody))
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)