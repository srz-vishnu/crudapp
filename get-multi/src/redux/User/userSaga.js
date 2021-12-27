import { GET_USER_INFO,GET_USER_INFO_SUCCESS } from './userTypes'
import {put, takeEvery, call} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import axios from 'axios'

// function that makes the api request and returns a Promise for response
function fetchUserData() {
    return axios({
      method: "get",
      url: "http://localhost:8000/users"
    });
  }

function* getUserSaga(){
    console.log("...saga")
    //  yield delay(4000)
    const response = yield call(fetchUserData);
    console.log("...saga",response.data);
    yield put({type :GET_USER_INFO_SUCCESS, userInfo : response.data }  )
}

//post code added to get code

function* postUserSaga (action) {
  try{
      const udata = action.payload;
      const res = yield call(axios.post,"http://localhost:8000/users",udata);      
      console.log("output", res)
      yield put({type:'POST_USER_INFO_SUCCESS',userInfo : res.data});
    }
    catch (e) { console.log('error',e) }
}


function* delUserSaga (action) {
  try{
      const udata = action.payload;
      const res = yield call(axios.delete,"http://localhost:8000/users/"+udata);      
      console.log("output", res)
      yield put({type:GET_USER_INFO});
    }
    catch (e) { console.log('error',e) }
}

function* updUserSaga (action) {
  try{
      const udata = action.payload;
      const res = yield call(axios.put,"http://localhost:8000/users/"+udata.id,udata);      
      console.log("output", res)
      yield put({type:GET_USER_INFO});
    }
    catch (e) { console.log('error',e) }
}




export function* watchUserContainer(){
    yield takeEvery(GET_USER_INFO,getUserSaga)
    yield takeEvery('POST_USER_INFO', postUserSaga)
    yield takeEvery('DEL_USER_INFO',delUserSaga)
    yield takeEvery('UPD_USER_INFO',updUserSaga)
}


