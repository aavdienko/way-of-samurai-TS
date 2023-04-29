import React, { ComponentType } from "react";
import { AppStateType } from "../redux/redux-store";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

type withAuthMSTPType = {
  isAuth: boolean
}

const mapStateToProps = (state: AppStateType): withAuthMSTPType => {
  return {
    isAuth: state.auth.isAuth
  }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
  
  const RedirectComponent = (props: withAuthMSTPType) => {
    let {isAuth, ...restProps} = props

    if (!isAuth) return <Redirect to={'/login'}/>

    return <Component {...restProps as T & {children?: React.ReactNode}}/>
  }

  let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
  return ConnectedRedirectComponent
}