import * as types from '../types'

const initialState = {
    messages : []
}

export const messagesReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        
        case types.SEND_MESSAGE :
            return {
                ...state,
                messages : [...state.messages, payload]
            }

        default :
            return state
    }
}