
export type StateType = {
  profilePage: ProfilePageType,
  dialogsPage: DialogsPageType
}
export type ProfilePageType = {
  posts: Array<PostsType>
}

export type DialogsPageType = {
  dialogs: Array<DialogsType>,
  messages: Array<MessagesType>,
}

export type PostsType = {
  id: number,
  message: string,
  likesCount: number
}

export type MessagesType = {
  id: number,
  message: string
}

export type DialogsType = {
  name: string,
  id: number
}

export let state: StateType = {
  profilePage: {
    posts: [
      {id: 1, message:'Hi how are you?', likesCount: 20},
      {id: 2, message:'It is my first post', likesCount: 30}
    ]
  },
  dialogsPage: {
    dialogs: [
      {id:1, name: 'Alex'},
      {id:2, name: 'Lera'},
      {id:3, name: 'Schoko'},
      {id:4, name: 'Crosby'},
    ],
    messages: [
      {id:1, message: 'Hi'},
      {id:2, message: 'How are you?'},
      {id:3, message: 'I am Crosby!'},
      {id:4, message: 'Yo!'},
    ],
  }
}

export const addPost = (postText: string) => {
  let newPost: PostsType = {
    id: 3, 
    message: postText, 
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
}