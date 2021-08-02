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
                items : [...state.items, payload],
                counter : state.counter + 1
            }

        case types.REMOVE_FROM_WİSHLİST :
            return {
                ...state,
                items : state.items.filter(item => item !== payload),
                counter : state.counter - 1
            }
        
        default :
            return state
    }
}