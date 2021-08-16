import * as types from '../types'

export const initialState = {
    open : false,
    type : "",
    message : ""
}

export const snackBarReducer = (state = initialState, { type, payload }) => {
    switch(type) {

        case types.SET_SNACKBAR : 
            return {
                ...state,
                open : payload.open,
                type : payload.type,
                message : payload.message
            }

        default :
            return state
    }
}