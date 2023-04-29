import React from "react";


type ProfileStatusPropsType = {
  status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType>{

  state = {
    editMode: false
  }

  setEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  render() {
    return (
      <div>
        {this.state.editMode 
          ? <div><input onBlur={this.setEditMode} value={this.props.status} autoFocus/></div> 
          : <div><span onDoubleClick={this.setEditMode}>{this.props.status}</span> </div>
        }
      </div>
    )
  }

};


export default ProfileStatus