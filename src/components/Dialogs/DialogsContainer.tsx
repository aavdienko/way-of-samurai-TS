import { ActionTypes, DialogsPageType } from '../../redux/store';
import {
  addMessageAC,
  updateNewMessageTextAC,
} from '../../redux/dialogs-reducer';
import { Dialogs } from './Dialogs';
import { StoreContext } from '../../StoreContext';

// type DialogsPropsType = {
//   state: DialogsPageType;
//   dispatch: (action: ActionTypes) => void;
// };

export const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().dialogsPage

        const addMessageHandler = () => {
          store.dispatch(addMessageAC());
        };

        const onMessageChangeHandler = (newMessageText: string) => {
          store.dispatch(updateNewMessageTextAC(newMessageText));
        };

        return (
          <Dialogs
            addMessageHandler={addMessageHandler}
            onMessageChangeHandler={onMessageChangeHandler}
            state={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
