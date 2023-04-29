import React, { ComponentType } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { InitialStateType, ProfileType, getUserProfileThunkCreator } from '../../redux/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


type ProfileMSTPType = {
  profile: ProfileType | null
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
  }
}

const WithUrlDataProfileContainer = withRouter(ProfileContainerClass) // забираем userID из URL с помощью withRouter котрый создает контерйнерную компоненту для этого

// export const ProfileContainer = withAuthRedirect(connect(mapStateToProps, {getUserProfileThunkCreator})(WithUrlDataProfileContainer))

export const ProfileContainer = compose<ComponentType>(
  connect(mapStateToProps, {getUserProfileThunkCreator}), 
  withRouter, 
  withAuthRedirect)(ProfileContainerClass)

