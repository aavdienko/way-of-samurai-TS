import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';


type DialogItemPropsType = {
  name: string,
  id: number
}

export const DialogItem = (props: DialogItemPropsType) => {

  let path = "/dialogs/" + props.id
  return (
    <div className={styles.dialog + ' ' + styles.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

type MessagePropsType = {
  message: string
}

export const Message = (props: MessagePropsType) => {

  return (
    <div className={styles.message}>{props.message}</div>
  )
}

export const Dialogs = () => {

  let dialogsData = [
    {id:1, name: 'Alex'},
    {id:2, name: 'Lera'},
    {id:3, name: 'Schoko'},
    {id:4, name: 'Crosby'},
  ]

  let messageData = [
    {id:1, message: 'Hi'},
    {id:2, message: 'How are you?'},
    {id:3, message: 'I am Crosby!'},
    {id:4, message: 'Yo!'},
  ]

  let dialogsElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>)
  let messageElements = messageData.map (m => <Message message={m.message}/>)

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
