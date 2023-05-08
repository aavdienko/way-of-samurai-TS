import React, { ChangeEvent } from 'react';
import styles from './MyPosts.module.css';
import { MyPostsPropsType } from './MyPostsContainer';
import Post from './Post/Post';
import { InjectedFormProps, Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../utils/validators/validators';
import { TextArea } from '../../../common/formControls/FormControls';


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

const maxPostLength = maxLengthCreator(15)

export const AddPostForm = (props: InjectedFormProps<FormDataType>) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field type='text' placeholder="type your message..." component={TextArea} name={'newPost'} validate={[requiredField, maxPostLength]}/>
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
