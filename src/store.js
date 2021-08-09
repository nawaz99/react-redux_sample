import { createStore } from "redux";
import reducer1 from './reducer1';

const store = createStore(reducer1,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;