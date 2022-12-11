import { combineReducers } from "redux";

import listReducer from "./reducers/listReducers";
import favoriteReducer from "./reducers/favoriteReducer";

const rootReducer = combineReducers({
    listReducer,
    favoriteReducer
});

export default rootReducer;