import React, { ChangeEvent } from 'react';
import styles from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogItem } from './DialogItem/DialogItem';
import { ActionTypes, addMessageAC, DialogsPageType, updateNewMessageTextAC } from '../../redux/state';


type DialogsPropsType = {
  state: DialogsPageType
  dispatch: (action: ActionTypes) => void
}

export const Dialogs = (props: DialogsPropsType) => {

  // вынесли в Index.ts
  // let dialogsData = [
  //   {id:1, name: 'Alex'},
  //   {id:2, name: 'Lera'},
  //   {id:3, name: 'Schoko'},
  //   {id:4, name: 'Crosby'},
  // ]

  // let messageData = [
  //   {id:1, message: 'Hi'},
  //   {id:2, message: 'How are you?'},
  //   {id:3, message: 'I am Crosby!'},
  //   {id:4, message: 'Yo!'},
  // ]

  let dialogsElements = props.state.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
  let messageElements = props.state.messages.map( m => <Message key={m.id} message={m.message}/>)

  // const newMessageElement = React.createRef<HTMLTextAreaElement>() - заменили на event 
  
  const addMessageHandler = () => {
    props.dispatch(addMessageAC())
  }

  const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let newMessageText = e.currentTarget.value
    // let newMessageText = newMessageElement.current ? newMessageElement.current.value : '----'
    props.dispatch(updateNewMessageTextAC(newMessageText))
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messageElements}
        <textarea onChange={onMessageChangeHandler}  value={props.state.newMessageText}></textarea>        
        <button className={styles.button} onClick={addMessageHandler}>Send</button>
      </div>

    </div>
  );
};
