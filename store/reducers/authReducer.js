import * as types from '../types'

const initialState = {
    user : null,
    login : () => {},
    logout : () => {},
    authReady : false
}

export const authReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.USER_LOGIN : 
            return {
                ...state,
                user : payload
            }
        
        case types.USER_LOGOUT :
            return {
                ...state,
                user : payload
            }

        default :
        return state
    }
}