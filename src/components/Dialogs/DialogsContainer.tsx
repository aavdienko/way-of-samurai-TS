import {
  addMessageAC,
  InitialStateType,
  updateNewMessageTextAC,
} from '../../redux/dialogs-reducer';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { compose, Dispatch } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { ComponentType } from 'react';

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
    state: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DialogsMDTPType => {
  return {
    addMessageHandler: () => dispatch(addMessageAC()),
    onMessageChangeHandler:(newMessageText: string) => dispatch(updateNewMessageTextAC(newMessageText))
  }
}
// export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

export const DialogsContainer = compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect)(Dialogs)