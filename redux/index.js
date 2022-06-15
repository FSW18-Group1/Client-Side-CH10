import { combineReducers } from "redux";
import {signupReducer, loginReducer} from "./reducers/register";
import authenticatedReducer from "./reducers/authenticated";
import leaderboardReducer from "./reducers/leaderboard";

export default combineReducers({
    signupReducer,
    loginReducer,
    authenticatedReducer,
    leaderboardReducer
})