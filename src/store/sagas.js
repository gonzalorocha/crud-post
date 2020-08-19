import { all,takeEvery } from 'redux-saga/effects';
import {
    GET_POST,
    SELECTED_POST,
    NEW_POST,
    EDIT_POST,
    DELETE_POST
} from './post/actionTypes';

import {
  getPost,
  selectPost,
  newPost,
  editPost,
  deletePost,
} from "./post/saga";


export default function* rootSaga() {
    yield all([
        takeEvery(GET_POST, getPost),
        takeEvery(SELECTED_POST, selectPost),
        takeEvery(NEW_POST, newPost),
        takeEvery(EDIT_POST, editPost),
        takeEvery(DELETE_POST, deletePost),


    ])
}