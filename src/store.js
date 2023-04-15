import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { stateActions } from "./components/duck";

const store = createStore(rootReducer, composeWithDevTools())


export default store