import {ADD_COMMENT} from '../actions/types';

const initialState = {
  comments: [
    
  ]
};

function CommentsReducer(state=initialState, action){
  switch(action.type){
    case ADD_COMMENT:
      return{
        ...state,
        comments: [action.payload, ...state.comments]
      }

    default:
      return state;
  }
}

export default CommentsReducer;
