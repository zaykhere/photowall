import { bindActionCreators } from 'redux';
import {GET_POSTS,DELETE_POST, ADD_POST,EDIT_POST,GET_POST} from '../actions/types';

export const getPosts = () => dispatch=> {
  dispatch({type: GET_POSTS});
}

export const deletePost = (id) => dispatch => {
  dispatch({type: DELETE_POST, payload: id});
  return;
}

export const addPost = (post) => dispatch => {
  dispatch({type: ADD_POST, payload: post});
}

export const getPost = (id) => dispatch => {
  dispatch({type: GET_POST, payload: id});
}

export const editPost = (editedPost) => dispatch => {
  dispatch({type: EDIT_POST, payload: editedPost});
}
