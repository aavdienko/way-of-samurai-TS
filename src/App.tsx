import { Route, withRouter } from 'react-router-dom';
import './App.css';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import Navbar from './components/Navbar/Navbar';
import { UsersContainer } from './components/Users/UsersContainer';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { LoginContainer } from './components/Login/Login';
import { ComponentType } from 'react';
import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { InitialStateType, initializedAPPThunkCreator } from './redux/app-reducer';
import { AppStateType } from './redux/redux-store';
import { Preloader } from './common/preloader/Preloader';


// export type AppPropsType = {
//   state: StateType;
//   dispatch: (action: ActionTypes) => void;
// };

type AppMDTPType = {
  initializedAPPThunkCreator: () => void
}

type AppMSTPType = InitialStateType
type AppPropsType = AppMDTPType & AppMSTPType

class App extends React.Component<AppPropsType> {

  componentDidMount(): void {
    this.props.initializedAPPThunkCreator()
  }
  render(){

    if(!this.props.initialized) {
      return <Preloader/>
    }
  return (
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
              <LoginContainer/>
            )}
          />
          {/* <Route path='/news' render={() => <Profile posts={props.posts}/>} />
          <Route path='/music' render={() => <Profile posts={props.posts}/>} />
          <Route path='/settings' render={() => <Profile posts={props.posts}/>} /> */}
        </div>
      </div>
  );
};
}

const mapStateToProps = (state: AppStateType): AppMSTPType=> ({
  initialized: state.app.initialized 
})

export default compose<ComponentType>(
  withRouter,
  connect(mapStateToProps, {initializedAPPThunkCreator}))(App)
