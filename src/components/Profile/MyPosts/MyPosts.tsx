import React, { ChangeEvent } from 'react';
import styles from './MyPosts.module.css';
import { MyPostsPropsType } from './MyPostsContainer';
import Post from './Post/Post';
import { InjectedFormProps, Field, reduxForm } from 'redux-form';


const MyPosts = (props: MyPostsPropsType) => {

  let postsElements = props.posts.map((p, index) => (
    <Post key={index} message={p.message} likesCount={p.likesCount} />
  ));

  const onSubmit = (formData: FormDataType) => {
    console.log(formData.newPost);
    props.addPost(formData.newPost)
  }

  return (
    <div className={styles.postsBlock}>
      <h2>My Posts</h2>
      <AddPostReduxForm onSubmit={onSubmit}/>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

type FormDataType = {
  newPost: string
}

export const AddPostForm = (props: InjectedFormProps<FormDataType>) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field type='text' placeholder="type your message..." component={'textarea'} name={'newPost'}/>
        </div>
        <div>
          <button className={styles.button} type="submit">Send</button>
        </div>
      </form>
  )
} 

export const AddPostReduxForm = reduxForm<FormDataType>({
  form: 'profileAddPostForm'
})(AddPostForm)

export default MyPosts;
