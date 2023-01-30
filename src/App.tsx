import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { StateType } from './redux/state';

export type AppPropsType = {
  state: StateType;
  addPost: () => void;
  updateNewPostText: (newText: string ) => void;
};

const App = (props: AppPropsType) => {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />
        <Navbar />
        <div className="app-wraper-content">
          <Route
            path="/profile"
            render={() => (
              <Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
            )}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.state.dialogsPage} />}
          />
          {/* <Route path='/news' render={() => <Profile posts={props.posts}/>} />
          <Route path='/music' render={() => <Profile posts={props.posts}/>} />
          <Route path='/settings' render={() => <Profile posts={props.posts}/>} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
