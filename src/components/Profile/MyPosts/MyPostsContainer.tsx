import { connect } from 'react-redux';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
import { ActionTypes, ProfilePageType, StateType } from '../../../redux/store';

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

type MyPostsMSTPType = ProfilePageType

type MyPostsMDTPType = {
  updateNewPostText: (newText: string) => void
  addPost: () => void
}

const mapStateToProps = (state: StateType): MyPostsMSTPType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void): MyPostsMDTPType => {
  return {
    updateNewPostText: (newText: string) => {
      dispatch(updateNewPostTextAC(newText))
    },
    addPost: () => {
      dispatch(addPostAC())
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)