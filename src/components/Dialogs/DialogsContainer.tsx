import { ActionTypes, DialogsPageType, PostsType, StateType } from '../../redux/store';
import {
  addMessageAC,
  updateNewMessageTextAC,
} from '../../redux/dialogs-reducer';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';

// type DialogsPropsType = {
//   state: DialogsPageType;
//   dispatch: (action: ActionTypes) => void;
// };

type DialogsMSTPType = {
  state: DialogsPageType
}

type DialogsMDTPType = {
  addMessageHandler: () => void
  onMessageChangeHandler: (newMessageText: string) => void
}

const mapStateToProps = (state: StateType): DialogsMSTPType => {
  return {
    state: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void): DialogsMDTPType => {
  return {
    addMessageHandler: () => dispatch(addMessageAC()),
    onMessageChangeHandler:(newMessageText: string) => dispatch(updateNewMessageTextAC(newMessageText))
  }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)