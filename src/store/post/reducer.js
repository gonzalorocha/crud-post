import {
    GET_POST_SUCCESS,
    GET_POST_ERROR,
    SELECTED_POST_SUCCESS,
    SELECTED_POST_ERROR,
    NEW_POST_SUCCESS,
    NEW_POST_ERROR,
    EDIT_POST_SUCCESS,
    EDIT_POST_ERROR,
    DELETE_POST_SUCCESS,
    DELETE_POST_ERROR
} from "./actionTypes";

const initialState = {
    posts: [],
    error: "",
    selectpost: null,
    loading: false
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
      case GET_POST_SUCCESS:
        return {
          ...state,
          posts: payload,
          error: "",
          loading: false,
        };
      case GET_POST_ERROR:
        return {
          ...state,
          error: payload.error,
          loading: false,
        };
      case SELECTED_POST_SUCCESS:
        return {
          ...state,
          selectpost: payload,
        };
      case SELECTED_POST_ERROR:
        return {
          ...state,
          selectpost: null,
          error: payload,
        };
      case NEW_POST_SUCCESS:
        return {
          ...state,
        };
      case NEW_POST_ERROR:
        return {
          ...state,
          error: payload,
        };
      case EDIT_POST_SUCCESS:
        return {
          ...state,
        };
      case EDIT_POST_ERROR:
        return {
          ...state,
          error: payload,
        };
      case DELETE_POST_SUCCESS:
        return {
          ...state,
        };
      case DELETE_POST_ERROR:
        return {
          ...state,
          error: payload,
        };
      default:
        return state;
    }
}