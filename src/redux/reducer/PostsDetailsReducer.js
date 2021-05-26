//Action Type files
import { GET_POSTS_API} from "../action/actionType";

//State Initialize :
const initial_state = {
    loading: true,
    posts:[],
};

export const PostsDetailsReducer = (state = initial_state, action) => {
  const { type, payload } = action;
  //Usign Switch case 
  switch (type) {
    case GET_POSTS_API:
      return {
        ...state, //stuff state 
        posts:state.posts.concat(payload), //concate the data
        loading: false, 
      };     
    default:
      return state;
  }
};
