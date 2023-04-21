import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { UsersContainer } from './components/Users/UsersContainer';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import { HeaderContainer, HeaderContainerClass } from './components/Header/HeaderContainer';
import { Login } from './components/Login/Login';


// export type AppPropsType = {
//   state: StateType;
//   dispatch: (action: ActionTypes) => void;
// };

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wraper-content">
          <Route
            path="/profile/:userId?"
            render={() => (
              <ProfileContainer/>
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
          <Route
            path="/login"
            render={() => (
              <Login/>
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
