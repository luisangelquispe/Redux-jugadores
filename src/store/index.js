import { createStore } from "redux";
import { combineReducers } from "redux";
import { reducerEntrenador } from "./jugadoresC/reducer";

const reducer = combineReducers({reducerEntrenador})

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    )
export default store;