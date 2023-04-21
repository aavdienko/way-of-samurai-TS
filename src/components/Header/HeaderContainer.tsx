import React from 'react';
import axios from 'axios';
import Header from './Header';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { getAuthUserDataThunkCreator } from '../../redux/auth-reducer';

type HeaderMSTPType = {
  isAuth: boolean
  login: string | null
}

type HeaderMDTPType = {
  getAuthUserDataThunkCreator: () => void
}

export type HeaderPropsType = HeaderMSTPType & HeaderMDTPType

export class HeaderContainerClass extends React.Component<HeaderPropsType> {
  componentDidMount(): void {
    this.props.getAuthUserDataThunkCreator()
    // authAPI.me()
    //   .then((response) => {
    //     if(response.data.resultCode === 0){
    //       this.props.setUserData(response.data.data);
    //     }
    //   });

  }

  render (){
    return (
      <div>
          <Header {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = (state: AppStateType): HeaderMSTPType => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export const HeaderContainer = connect(mapStateToProps, {getAuthUserDataThunkCreator})(HeaderContainerClass)