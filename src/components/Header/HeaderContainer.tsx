import React from 'react';
import axios from 'axios';
import Header from './Header';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { DataType, setUserData } from '../../redux/auth-reducer';
import { log } from 'console';

type HeaderMSTPType = {
  isAuth: boolean
  login: string | null
}

type HeaderMDTPType = {
  setUserData: (data: DataType) => void
}

export type HeaderPropsType = HeaderMSTPType & HeaderMDTPType

export class HeaderContainerClass extends React.Component<HeaderPropsType> {
  componentDidMount(): void {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      })
      .then((response) => {
        if(response.data.resultCode === 0){
          this.props.setUserData(response.data.data);
        }

      });
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

export const HeaderContainer = connect(mapStateToProps, {setUserData})(HeaderContainerClass)