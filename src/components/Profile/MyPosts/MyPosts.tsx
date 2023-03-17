import React from 'react';
import { ProfilePageType } from '../../../redux/store';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

interface MyPostsPropsType extends ProfilePageType {
  updateNewPostText: (newText: string) => void
  addPost: () => void
}

const MyPosts = (props: MyPostsPropsType) => {

  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  const newPostText = React.createRef<HTMLTextAreaElement>();


  const addPostHandler = () => {
    props.addPost()
  };

  const onPostChangeHandler = () => {
    let newText = newPostText.current ? newPostText.current.value : '----';
    props.updateNewPostText(newText)
  };

  return (
    <div className={styles.postsBlock}>
      <h2>My Posts</h2>
      <div>
        <textarea
          onChange={onPostChangeHandler}
          ref={newPostText}
          value={props.newPostText}
        ></textarea>
      </div>

      <div>
        <button onClick={addPostHandler}>Add Post</button>
      </div>

      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
