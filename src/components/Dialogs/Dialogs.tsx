import { ChangeEvent } from 'react';
import styles from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogItem } from './DialogItem/DialogItem';
import { DialogsPropsType } from './DialogsContainer';
import { constants } from 'buffer';
import { Redirect } from 'react-router-dom';


export const Dialogs = (props: DialogsPropsType) => {

  const dialogsElements = props.state.dialogs.map((d, index) => (
    <DialogItem key={index} name={d.name} id={d.id} />
  ));
  const messageElements = props.state.messages.map((m, index) => (
    <Message key={index} message={m.message} />
  ));

  // const newMessageElement = React.createRef<HTMLTextAreaElement>() - заменили на event

  const addMessageHandler = () => {
    props.addMessageHandler()
  };

  const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newMessageText = e.currentTarget.value;
    // let newMessageText = newMessageElement.current ? newMessageElement.current.value : '----'
    props.onMessageChangeHandler(newMessageText)
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>
        {messageElements}
        <textarea
          onChange={onMessageChangeHandler}
          value={props.state.newMessageText}
        ></textarea>
        <button className={styles.button} onClick={addMessageHandler}>
          Send
        </button>
      </div>
    </div>
  );
};
