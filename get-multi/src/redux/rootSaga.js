import { all } from "redux-saga/effects";
import {watchUserContainer} from './User/userSaga'

 export function * rootSaga(){
    yield all(
        [watchUserContainer(),]
    )
}