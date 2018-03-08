import { createStore, combineReducers } from "redux";
import productReducer from './products/';
import cartrReducer from './cart/';
import searchReducer from './search/'

const rootReducer = combineReducers({
    products: productReducer,
    search: searchReducer,
    cart: cartReducer
});W

 const store = createStore(
     rootReducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )
 export default store;