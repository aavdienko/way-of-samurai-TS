import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />
        <Navbar />
        <div className="app-wraper-content">
          <Route path='/profile' render={() => <Profile/>} />
          <Route path='/dialogs' render={() => <Dialogs/>} />
          <Route path='/news' render={() => <Profile/>} />
          <Route path='/music' render={() => <Profile/>} />
          <Route path='/settings' render={() => <Profile/>} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
