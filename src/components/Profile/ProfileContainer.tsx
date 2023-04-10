import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { InitialStateType, ProfileType, setUserProfile } from '../../redux/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router';


type ProfileMSTPType = {
  profile: ProfileType | null
};
type ProfileMDTPType = {
  setUserProfile: (profile: ProfileType) => void
}

type PathParamsType = {
  userId: string
}

type OwnPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

export type ProfilePropsType = ProfileMSTPType & ProfileMDTPType;

class ProfileContainerClass extends React.Component<OwnPropsType> {

  componentDidMount(): void {
    let userId = this.props.match.params.userId
    debugger
    if(!userId) {
      userId = '2'
    }

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {

        console.log(response)
        this.props.setUserProfile(response.data);
      });
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
    profile: state.profilePage.profile
  }
}

const WithUrlDataProfileContainer = withRouter(ProfileContainerClass) // забираем userID из URL с помощью withRouter котрый создает контерйнерную компоненту для этого

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataProfileContainer)