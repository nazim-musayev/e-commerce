import * as types from '../types'

const initialState = {
    items : [],
    counter : 0
}

export const cartReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        
        case types.ADD_TO_CART :
            return {
                ...state,
                items : payload.cartItems,
                counter : state.counter + 1
            }

        case types.REMOVE_FROM_CART :
            return {
                ...state,
                items : payload.cartItems,
                counter : state.counter - payload.quantity
            }
            
        case types.CHANGE_QUANTITY :
            return {
                ...state,
                items : payload.cartItems,
                counter : state.counter + payload.count
            }
            
        default :
            return state
    }
}