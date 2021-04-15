// NPM packages
import { createStore, applyMiddleware, compose } from "redux";

//Redux Thunk 
import thunk from "redux-thunk";

// Reducer file 
import {PostsDetailsReducer} from "./reducer/PostsDetailsReducer";

let store;

// Enable redux dev tool only in development mode
if(process.env.NODE_ENV !== "production"){
const composeEnhancers=window.__REDUX_DEVTOOLS_EXNTENSION_COMPOSE__ || compose;
store = createStore (PostsDetailsReducer, composeEnhancers(applyMiddleware(thunk)));

}
else{
  store= createStore(PostsDetailsReducer, applyMiddleware(thunk));
}

export default store;
