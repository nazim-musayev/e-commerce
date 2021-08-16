import * as types from '../types'

const initialState = {
    subscribers : []
}

export const newsletterReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        
        case types.ADD_TO_LIST :
            return {
                ...state,
                subscribers : payload
            }

        default :
            return state
    }
}