import {combineReducers} from 'redux';
import PhotowallReducer from './PhotowallReducer';
import CommentsReducer from './CommentsReducer';
export default combineReducers({
  photowall: PhotowallReducer,
  comments: CommentsReducer
})
