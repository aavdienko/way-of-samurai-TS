import { rerenderEntireTree } from './../render';

export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}
export type ProfilePageType = {
  newPostText: string
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

export const state: StateType = {
  profilePage: {
    posts: [
      {id: 1, message:'Hi how are you?', likesCount: 20},
      {id: 2, message:'It is my first post', likesCount: 30}
    ],
    newPostText: ''
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

export const addPost = () => {
  let newPost: PostsType = {
    id: 3, 
    message: state.profilePage.newPostText, 
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}