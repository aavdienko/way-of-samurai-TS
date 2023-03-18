import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './redux/redux-store';
import { StateType } from './redux/store';
import { StoreContext } from './StoreContext';

const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App  />,
      </StoreContext.Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

// let dialogs: Array<DialogsType> = [
//   {id:1, name: 'Alex'},
//   {id:2, name: 'Lera'},
//   {id:3, name: 'Schoko'},
//   {id:4, name: 'Crosby'},
// ]

// let messages: Array<MessagesType> = [
//   {id:1, message: 'Hi'},
//   {id:2, message: 'How are you?'},
//   {id:3, message: 'I am Crosby!'},
//   {id:4, message: 'Yo!'},
// ]

// let posts: Array<PostsType> = [
//   {id: 1, message:'Hi how are you?', likesCount: 20},
//   {id: 2, message:'It is my first post', likesCount: 30}
// ]

rerenderEntireTree(store.getState());

store.subscribe(()=>{
  const state = store.getState()
  rerenderEntireTree(state)
})
