import * as types from '../types'

const initialState = {
    searchedProducts : [],
    searchWord : ''
}

export const searchReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        
        case types.SEARCH_FOR_PRODUCTS : 
            return {
                ...state,
                searchWord : payload.searchWord,
                searchedProducts : payload.searchedProducts
            }

        case types.CLEAR_SEARCH_INPUT :
            return {
                ...state,
                searchWord : "",
                searchedProducts : []
            }
        
        default :
            return state
    }
}