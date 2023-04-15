import { combineReducers } from "redux";
import stateReducer from "./components/duck";

const rootReducer = combineReducers({
    stateItems: stateReducer
})

export default rootReducer