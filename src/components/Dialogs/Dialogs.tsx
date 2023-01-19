import React from 'react';
import styles from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogItem } from './DialogItem/DialogItem';
import { DialogsType, MessagesType } from '../../App';

type DialogsPropsType = {
  dialogs: Array<DialogsType>,
  messages: Array<MessagesType>
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

  let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
  let messageElements = props.messages.map( m => <Message message={m.message}/>)

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messageElements}
      </div>
    </div>
  );
};
