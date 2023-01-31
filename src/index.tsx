import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { addPost, state, StateType, subscribe, updateNewPostText } from './redux/state';


const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
    </BrowserRouter>,
  document.getElementById('root')
);
}


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


rerenderEntireTree(state)

subscribe(rerenderEntireTree)
