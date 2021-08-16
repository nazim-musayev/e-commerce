import * as types from '../types'

const initialState = {
    user : null,
    users : []
}

export const authReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        
        case types.USER_LOGIN : 
            return {
                ...state,
                user : payload,
                users : [...state.users, payload]
            }
        
        case types.USER_LOGOUT :
            return {
                ...state,
                user : payload,
                users : state.users.filter(user => user.name === payload.name)
            }

        default :
        return state
    }
}