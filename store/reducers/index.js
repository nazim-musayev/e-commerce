import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { displayReducer } from './displayReducer';
import { dialogReducer } from "./dialogReducer";
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';
import { wishlistReducer } from "./wishlistReducer";
import { authReducer } from "./authReducer";


const persistConfig = {
    key : 'primary',
    storage,
    whitelist : ['cart', 'products']
}

const rootReducer = combineReducers({
    display : displayReducer,
    dialog : dialogReducer,
    products : productsReducer,
    cart : cartReducer,
    wishlist : wishlistReducer,
    auth : authReducer
})

export default persistReducer(persistConfig, rootReducer)