import {
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
  SELECTED_POST,
  SELECTED_POST_SUCCESS,
  SELECTED_POST_ERROR,
  NEW_POST,
  NEW_POST_SUCCESS,
  NEW_POST_ERROR,
  EDIT_POST,
  EDIT_POST_SUCCESS,
  EDIT_POST_ERROR,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
} from "./actionTypes";

export const getPost = () => ({
  type: GET_POST,
});

export const getPostSuccess = (payload) => ({
  type: GET_POST_SUCCESS,
  payload,
});

export const getPostError = (payload) => ({
  type: GET_POST_ERROR,
  payload,
});

export const selectPost = (payload) => ({
    type: SELECTED_POST,
    payload
});

export const selectPostSuccess = (payload) => ({
  type: SELECTED_POST_SUCCESS,
  payload,
});

export const selectPostError = (payload) => ({
  type: SELECTED_POST_ERROR,
  payload,
});

export const newPost = (payload) => ({
  type: NEW_POST,
  payload,
});

export const newPostSuccess = (payload) => ({
  type: NEW_POST_SUCCESS,
  payload,
});

export const newPostError = (error) => ({
  type: NEW_POST_ERROR,
  payload: error,
});

export const editPost = (payload) => ({
  type: EDIT_POST,
  payload,
});

export const editPostSuccess = (payload) => ({
  type: EDIT_POST_SUCCESS,
  payload,
});

export const editPostError = (error) => ({
  type: EDIT_POST_ERROR,
  payload: error,
});

export const deletePost = (payload) => ({
  type: DELETE_POST,
  payload,
});

export const deletePostSuccess = (payload) => ({
  type: DELETE_POST_SUCCESS,
  payload,
});

export const deletePostError = (error) => ({
  type: DELETE_POST_ERROR,
  payload: error,
});
