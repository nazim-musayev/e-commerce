import * as types from '../types'

const initialState = {
    isLoading : false,
    items : [],
    error : '',
    value : ''
}

export const productsReducer = (state = initialState, {type, payload}) => {
    switch(type) {

        case types.GET_PRODUCTS_REQUEST : 
            return {
                ...state,
                isLoading : true
            }

        case types.GET_PRODUCTS_SUCCESS : 
            return {
                isLoading : false,
                items : payload,
                error : '',
            }

        case types.GET_PRODUCTS_ERROR :
            return {
                isLoading : false,
                items : [],
                error : payload
            }

            case types.SORT_BY : 
            return {
                value : payload.sortingValue,
                items : payload.sortedProducts,
            }             

        default :
            return state
        
    }

}