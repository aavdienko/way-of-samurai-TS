import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { InitialStateType, ProfileType, getUserProfileThunkCreator } from '../../redux/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router';


type ProfileMSTPType = {
  profile: ProfileType | null
  isAuth: boolean
};
type ProfileMDTPType = {
  getUserProfileThunkCreator: (userId: string) => void
}

type PathParamsType = {
  userId: string
}

type OwnPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

export type ProfilePropsType = ProfileMSTPType & ProfileMDTPType;

class ProfileContainerClass extends React.Component<OwnPropsType> {

  componentDidMount(): void {
    let userId = this.props.match.params.userId
    if(!userId) {
      userId = '2'
    }
    this.props.getUserProfileThunkCreator(userId)
  }

  render() {

    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType): ProfileMSTPType => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}

const WithUrlDataProfileContainer = withRouter(ProfileContainerClass) // забираем userID из URL с помощью withRouter котрый создает контерйнерную компоненту для этого

export const ProfileContainer = connect(mapStateToProps, {getUserProfileThunkCreator})(WithUrlDataProfileContainer)