import React, { ChangeEvent } from "react";


type ProfileStatusPropsType = {
  status: string
  updateUserStatusThunkCreator: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType>{

  state = {
    editMode: false,
    status: this.props.status
  }

  setEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    })
    if(this.state.editMode){
      this.props.updateUserStatusThunkCreator(this.state.status)
      this.setState({
        status: ''
      })
    }
  }


  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value
    })
  }


  render() {
    return (
      <div>
        {this.state.editMode 
          ? <div><input onChange={this.onStatusChange} onBlur={this.setEditMode} value={this.state.status} autoFocus/></div> 
          : <div><span onDoubleClick={this.setEditMode}>{this.props.status}</span> </div>
        }
      </div>
    )
  }

};


export default ProfileStatus