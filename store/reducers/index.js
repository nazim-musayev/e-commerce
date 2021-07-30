import { combineReducers } from "redux";
import { displayReducer } from './displayReducer';
import { dialogReducer } from "./dialogReducer";
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';

export default combineReducers({
    display : displayReducer,
    dialog : dialogReducer,
    myProducts : productsReducer,
    cart : cartReducer
})