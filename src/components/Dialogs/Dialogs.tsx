import { ChangeEvent } from 'react';
import styles from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogItem } from './DialogItem/DialogItem';
import { DialogsPageType } from '../../redux/store';


type DialogsPropsType = {
  state: DialogsPageType;
  addMessageHandler: () => void
  onMessageChangeHandler: (newMessageText: string) => void
};

export const Dialogs = (props: DialogsPropsType) => {

  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));
  let messageElements = props.state.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  // const newMessageElement = React.createRef<HTMLTextAreaElement>() - заменили на event

  const addMessageHandler = () => {
    props.addMessageHandler()
  };

  const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let newMessageText = e.currentTarget.value;
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
