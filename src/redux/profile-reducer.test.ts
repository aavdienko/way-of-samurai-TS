import { InitialStateType, addPostAC, deletePostAC, profileReducer } from "./profile-reducer"

const initialState: InitialStateType = {
  posts: [
    { id: 1, message: 'Hi how are you?', likesCount: 20 },
    { id: 2, message: 'It is my first post', likesCount: 30 },
  ],
  profile: null,
  status: ''
  }


it('reducer should add post', () => {
  const newPost = 'Test'
  let action = addPostAC(newPost)
  const newState = profileReducer(initialState, action)

  expect(newState.posts.length).toBe(3)
  expect(newState.posts[0].message).toBe(newPost)
  expect(newState.posts[0].likesCount).toBe(0)

})

it('reducer should delete post', () => {
  
  let action = deletePostAC(3)
  const newState = profileReducer(initialState, action)

  expect(newState.posts.length).toBe(2)
  expect(newState.posts[0].message).toBe('Hi how are you?')
  expect(newState.posts[0].likesCount).toBe(20)

})