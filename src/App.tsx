import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Users } from './components/Users/Users';
import { UsersContainer } from './components/Users/UsersContainer';
import { ActionTypes, StateType } from './redux/store';

// export type AppPropsType = {
//   state: StateType;
//   dispatch: (action: ActionTypes) => void;
// };

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />
        <Navbar />
        <div className="app-wraper-content">
          <Route
            path="/profile"
            render={() => (
              <Profile

              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <DialogsContainer/>
            )}
          />
          <Route
            path="/users"
            render={() => (
              <UsersContainer/>
            )}
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
