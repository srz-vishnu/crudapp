
import { GET_USER_INFO } from './userTypes'

export const getUserInfo = () => {
  return {
    type: GET_USER_INFO,
  }
}

const postUserInfo = (user) => {
  return{
      type: 'POST_USER_INFO',
      payload: user,
  }
}

export default postUserInfo;

export const delUserInfo  = (user) => {
  return{
      type: 'DEL_USER_INFO',
      payload: user,
  }
}


export const updUserInfo  = (user) => {
  return{
      type: 'UPD_USER_INFO',
      payload: user,
  }
}
