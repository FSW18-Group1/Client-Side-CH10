import { combineReducers } from "redux";
import {signupReducer, loginReducer} from "./reducers/register";
import authenticatedReducer from "./reducers/authenticated";
import leaderboardReducer from "./reducers/leaderboard";
import ProfilePlayerReducer from "./reducers/profileplayer";

export default combineReducers({
    signupReducer,
    loginReducer,
    authenticatedReducer,
    leaderboardReducer,
    ProfilePlayerReducer
})