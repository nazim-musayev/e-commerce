import * as types from '../types'

const initialState = {
    user : null,
    iconBadge : 'standard'
}

export const authReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.USER_LOGIN : 
            return {
                ...state,
                user : payload,
                iconBadge : 'dot'
            }
        
        case types.USER_LOGOUT :
            return {
                ...state,
                user : payload,
                iconBadge : 'standard'
            }

        default :
        return state
    }
}