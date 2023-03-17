import { ActionTypes, DialogsPageType } from '../../redux/store';
import {addMessageAC,updateNewMessageTextAC} from '../../redux/dialogs-reducer';
import { Dialogs } from './Dialogs';

type DialogsPropsType = {
  state: DialogsPageType;
  dispatch: (action: ActionTypes) => void;
};

export const DialogsContainer = (props: DialogsPropsType) => {


  const addMessageHandler = () => {
    props.dispatch(addMessageAC());
  };

  const onMessageChangeHandler = (newMessageText: string) => {
    props.dispatch(updateNewMessageTextAC(newMessageText));
  };

  return (
    <Dialogs addMessageHandler={addMessageHandler} onMessageChangeHandler={onMessageChangeHandler} state={props.state}/>
  );
};
