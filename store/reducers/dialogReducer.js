import * as types from '../types'

const initialState = {
    isDisplaying : false
}

export const dialogReducer = ( state = initialState, {type}) => {
    switch(type) {
        
        case types.DISPLAY_DIALOG :
            return {
                ...state,
                isDisplaying : true
            }
        
        case types.CLOSE_DIALOG : 
            return {
                isDisplaying : false
            }

        default :
            return state
    }
}