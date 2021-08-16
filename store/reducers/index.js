import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { displayReducer } from './displayReducer';
import { dialogReducer } from "./dialogReducer";
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';
import { wishlistReducer } from "./wishlistReducer";
import { authReducer } from "./authReducer";
import { searchReducer } from "./searchReducer";
import { newsletterReducer } from "./newsletterReducer";
import { messagesReducer } from "./messagesReducer";
import { snackBarReducer } from "./snackBarReducer";


const persistConfig = {
    key : 'primary',
    storage,
    whitelist : ['products', 'cart', 'wishlist', 'auth', 'newsLetter', 'messages']
}

const rootReducer = combineReducers({
    products : productsReducer,
    display : displayReducer,
    dialog : dialogReducer,
    cart : cartReducer,
    wishlist : wishlistReducer,
    auth : authReducer,
    search : searchReducer,
    newsLetter : newsletterReducer,
    messages : messagesReducer,
    snackbar : snackBarReducer
})

export default persistReducer(persistConfig, rootReducer)