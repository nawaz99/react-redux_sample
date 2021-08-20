import { combineReducers } from "redux";
import cockTailReducer from './reducer';


const rootReducer = combineReducers({
    data:cockTailReducer,
});

export default rootReducer;