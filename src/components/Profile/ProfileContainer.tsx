import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { InitialStateType, ProfileType, setUserProfile } from '../../redux/profile-reducer';


type ProfileMSTPType = {
  profile: ProfileType | null
};
type UsersMDTPType = {
  setUserProfile: (profile: ProfileType) => void
}
export type ProfilePropsType = ProfileMSTPType & UsersMDTPType;

class ProfileContainer extends React.Component<ProfilePropsType> {

  componentDidMount(): void {

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)