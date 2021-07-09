import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import pizzaReducer from "./reducers/pizzaReducer";
import thunk from "redux-thunk"
import filterReducer from "./reducers/filterReducer";
import cartReducer from "./reducers/cartReducer";


const rootReducer = combineReducers({
	pizza: pizzaReducer,
	filter: filterReducer,
	cart: cartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store