import * as types from '../types'

const initialState = {
    items : [],
    counter : 0
}

export const wishlistReducer = (state = initialState, {type, payload}) => {
    switch(type) {

        case types.ADD_TO_WİSHLİST :
            return {
                ...state,
                items : payload.wishlist,
                counter : state.counter + payload.count
            }

        case types.REMOVE_FROM_WİSHLİST :
            return {
                ...state,
                items : payload.wishlist,
                counter : state.counter - 1
            }
        
        case types.CLEAR_WISHLIST : 
            return {
                items : [],
                counter : 0
            }
        default :
            return state
    }
}