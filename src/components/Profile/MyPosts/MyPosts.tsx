import React from 'react';
import { ProfilePageType, StateType } from '../../../redux/state';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


interface MyPostsPropsType extends ProfilePageType {
  dispatch: (action: any) => void
}



const MyPosts = (props: MyPostsPropsType) => {

  // вынесли в index.ts
  // let postData = [
  //   {id: 1, message:'Hi how are you?', likesCount: 20},
  //   {id: 2, message:'It is my first post', likesCount: 30}
  // ]

  let postsElements = props.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


  const newPostText = React.createRef<HTMLTextAreaElement>();

  // const addPost = () => {
  //   let text = newPostElement.current?.value
  //   alert(text)
  // }

  const addPostHandler = () => {
    props.dispatch({type: 'ADD-POST'})
  }

  const onPostChangeHandler = () => {
    let newText = newPostText.current ? newPostText.current?.value : '----'
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', payload: {newText}})
    
  }

  return (
    <div className={styles.postsBlock}>
      <h2>My Posts</h2>
      <div>
        <textarea onChange={onPostChangeHandler} ref={newPostText} value={props.newPostText}></textarea>
      </div>

      <div>
        <button onClick={addPostHandler}>Add Post</button>
      </div>

      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
