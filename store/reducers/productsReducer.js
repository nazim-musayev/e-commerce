import * as types from '../types'
import { products } from '../../products'

const initialState = {
    items : products,
    sortingValue : ''
}

export const productsReducer = (state = initialState, {type, payload}) => {
    switch(type) {

        case types.SORT_BY :
            return {
                ...state,
                items : payload.sortedProducts,
                sortingValue : payload.sortingValue,
            }

        default :
            return state
        
    }

}