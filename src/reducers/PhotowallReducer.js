import {GET_POSTS,DELETE_POST, ADD_POST,EDIT_POST,GET_POST} from '../actions/types';

const initialState = {
  posts:[
    {
      id: 1,
      description: "beautiful landscape",
      imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
      "3919321_1443393332_n.jpg"
      }, {
      id: 2,
      description: "Aliens???",
      imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
      "3919321_1443393332_n.jpg"
      }, {
      id: 3,
      description: "On a vacation!",
      imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
      }
  ]
};

function PhotowallReducer(state=initialState, action){
  switch(action.type){
    case GET_POSTS:
      return{
        ...state
      };

    case DELETE_POST:
      return{
        ...state,
        posts: state.posts.filter(post=> post.id !== action.payload)
      } 
      
    case ADD_POST:
      return{
        ...state,
        posts: [action.payload, ...state.posts]
      }

    case GET_POST:
      return{
        ...state,
        post: state.posts.find(post=> post.id == action.payload)
      }  
      
    case EDIT_POST:
        return{
          ...state,
          posts: state.posts.map(post=> post.id===action.payload.id? post=action.payload: post )
        }    

    default:
      return state;
  }
}

export default PhotowallReducer;


