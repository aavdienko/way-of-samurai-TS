import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

export type AppPropsType = {
  messages: Array<MessagesType>,
  posts: Array<PostsType>,
  dialogs: Array<DialogsType>
}

export type PostsType = {
  id: number,
  message: string,
  likesCount: number
}

export type MessagesType = {
  id: number,
  message: string
}

export type DialogsType = {
  name: string,
  id: number
}

const App = (props: AppPropsType) => {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />
        <Navbar />
        <div className="app-wraper-content">
          <Route path='/profile' render={() => <Profile posts={props.posts}/>} />
          <Route path='/dialogs' render={() => <Dialogs messages={props.messages} dialogs={props.dialogs}/>} />
          <Route path='/news' render={() => <Profile posts={props.posts}/>} />
          <Route path='/music' render={() => <Profile posts={props.posts}/>} />
          <Route path='/settings' render={() => <Profile posts={props.posts}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
