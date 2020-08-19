import { combineReducers } from "redux";

import post from "./post/reducer";

const rootReducer = combineReducers({
    post
});

export default rootReducer;
