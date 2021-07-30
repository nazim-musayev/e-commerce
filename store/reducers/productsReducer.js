import * as types from '../types'
import { products } from '../../products'

const initialState = {
    products,
    wishlist : [],
    // cartItems : [],
    // cartCounter : 0,
    wishlistCounter : 0,
    sortingValue : '',
    sortedProducts : []
}

export const productsReducer = (state = initialState, {type, payload}) => {
    switch(type) {

        // case types.ADD_TO_CART :
        //     return {
        //        ...state,
        //        cartItems : [ ...state.cartItems, payload.cartItems],
        //        cartCounter : state.cartCounter + 1
        //     }

        // case types.REMOVE_FROM_CART :
        //     return {
        //         ...state,
        //         cartItems : state.cartItems.filter(cartItem => cartItem !== payload),
        //         cartCounter : state.cartCounter - 1
        //     }

        case types.ADD_TO_WİSHLİST :
            return {
               ...state,
               wishlist : [...state.wishlist, payload],
               wishlistCounter : state.wishlistCounter + 1,
            }

        case types.REMOVE_FROM_WİSHLİST :
            return {
                ...state,
                wishlist : state.wishlist.filter(wishlistItem => wishlistItem !== payload),
                wishlistCounter : state.wishlistCounter - 1
            }

        case types.SORT_BY :
            return {
                ...state,
                sortingValue : payload.sortingValue,
                products : payload.sortedProducts,
            }

        default :
            return state
        
    }

}