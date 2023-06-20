
import React, { ChangeEvent, useState } from "react";


type ProfileStatusPropsType = {
  status: string
  updateUserStatusThunkCreator: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

  const [editMode, setEditModeHook] = useState(false)
  const [status, setStatus] = useState(props.status)

  const setEditMode = () => {
    setEditModeHook(!editMode)
    if(editMode){
      props.updateUserStatusThunkCreator(status)
    }
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value) 
  }

  // componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any): void {
  //   if (prevProps.status !== this.props.status){
  //     this.setState({
  //       status: this.props.status
  //     })
  //   }
  // }

    return (
      <div>
        {editMode
          ? <div><input onChange={onStatusChange} onBlur={setEditMode} value={status} autoFocus/></div> 
          : <div><span onDoubleClick={()=>setEditModeHook(true)}>{props.status}</span></div>
        }
      </div>
    )
  }



export default ProfileStatusWithHooks