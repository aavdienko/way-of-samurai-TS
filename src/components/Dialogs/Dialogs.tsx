import { ChangeEvent } from 'react';
import styles from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogItem } from './DialogItem/DialogItem';
import { DialogsPropsType } from './DialogsContainer';
import { constants } from 'buffer';
import { Redirect } from 'react-router-dom';
import { InjectedFormProps, Field, reduxForm } from 'redux-form';


export const Dialogs = (props: DialogsPropsType) => {

  const dialogsElements = props.state.dialogs.map((d, index) => (
    <DialogItem key={index} name={d.name} id={d.id} />
  ));
  const messageElements = props.state.messages.map((m, index) => (
    <Message key={index} message={m.message} />
  ));
  
  const onSubmit = (formData: FormDataType) => {
    console.log(formData.newMessage);
    props.addMessageHandler(formData.newMessage)
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>
        {messageElements}
        <AddMessageReduxForm onSubmit={onSubmit}/>
      </div>
    </div>
  );
};

type FormDataType = {
  newMessage: string
}

export const AddMessageForm = (props: InjectedFormProps<FormDataType>) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field type='text' placeholder="type your message..." component={'textarea'} name={'newMessage'}/>
        </div>
        <div>
          <button className={styles.button} type="submit">Send</button>
        </div>
      </form>
  )
} 

export const AddMessageReduxForm = reduxForm<FormDataType>({
  form: 'dialogsAddMessageForm'
})(AddMessageForm)



