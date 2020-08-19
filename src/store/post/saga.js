import { put, call } from 'redux-saga/effects';
import {
    getPostSuccess,
    getPostError,
    selectPostSuccess,
    selectPostError,
    newPostSuccess,
    newPostError,
    editPostSuccess,
    editPostError,
    deletePostSuccess,
    deletePostError
} from './actions';

import { getPostAsync, getPostByIdAsync, savePostAsync, editPostAsync, deletePostAsync } from "./service";

export function* getPost(){
    try {
        const data = yield call(getPostAsync);
        yield put(getPostSuccess(data));
    } catch (error) {
        yield put(getPostError(error));
    }
}

export function* selectPost({ payload: {id} }) {
    try {
        const data = yield call(getPostByIdAsync, id);
        yield put(selectPostSuccess(data));
    } catch (error) {
        yield put(selectPostError(error));
    }
}

export function* newPost({ payload: {post} }) {
    try {
        const data = yield call(savePostAsync, post);
        yield put(newPostSuccess({...post, ...data}));
    } catch (error) {
        yield put(newPostError(error));
    }
}

export function* editPost({ payload: {id, post} }) {
    try {
        yield call(editPostAsync, {id, post});
        yield put(editPostSuccess());
    } catch (error) {
        yield put(editPostError(error));
    }
}

export function* deletePost({ payload: { id }}) {
    try {
        yield call(deletePostAsync, {id});
        yield put(deletePostSuccess());
    } catch (error) {
        yield put(deletePostError(error));
    }
}