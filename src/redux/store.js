import { createStore,applyMiddleware ,compose} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from "./rootreducer";

const middleware = [thunk];
if(process.env.NODE_ENV === 'development'){
middleware.push(logger);
}


const store = createStore(rootReducer,""
,compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;