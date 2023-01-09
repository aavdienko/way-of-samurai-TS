import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';


type DialogItemPropsType = {
  name: string,
  id: string
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
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name='Alex' id='1'/>
        <DialogItem name='Lera' id='2'/>
        <DialogItem name='Schoko' id='3'/>
        <DialogItem name='Crosby' id='4'/>
      </div>
      <div className={styles.messages}>
        <Message message='Hi'/>
        <Message message='How are you?'/>
        <Message message='I am Crosby!'/>
        <Message message='Yo!'/>
      </div>
    </div>
  );
};
