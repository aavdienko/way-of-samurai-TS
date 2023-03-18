import {
  addMessageAC,
  InitialStateType,
  updateNewMessageTextAC,
} from '../../redux/dialogs-reducer';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { Dispatch } from 'redux';

// type DialogsPropsType = {
//   state: DialogsPageType;
//   dispatch: (action: ActionTypes) => void;
// };

type DialogsMSTPType = {
  state: InitialStateType
}

type DialogsMDTPType = {
  addMessageHandler: () => void
  onMessageChangeHandler: (newMessageText: string) => void
}

export type DialogsPropsType = DialogsMSTPType & DialogsMDTPType

const mapStateToProps = (state: AppStateType): DialogsMSTPType => {
  return {
    state: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DialogsMDTPType => {
  return {
    addMessageHandler: () => dispatch(addMessageAC()),
    onMessageChangeHandler:(newMessageText: string) => dispatch(updateNewMessageTextAC(newMessageText))
  }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)