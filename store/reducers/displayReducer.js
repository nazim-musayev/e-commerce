import * as types from '../types'

const initialState = {
    layout : true,
    helpPage : false,
    helpPortal : false,
    searchPage : false
}

export const displayReducer = (state = initialState, {type}) => {
    switch(type) {

        case types.DISPLAY_HELP_PAGE :
            return {
                ...state,
                layout : false,
                helpPage : true,
                helpPortal : false,
                searchPage : false
            }
        
        case types.DISPLAY_SEARCH_PAGE :
            return {
                layout : false,
                helpPage : false,
                helpPortal : false,
                searchPage : true
            }

        case types.DISPLAY_LAYOUT :
            return {
                layout : true,
                helpPage : false,
                helpPortal : false,
                searchPage : false
            }

        case types.DISPLAY_HELP_PORTAL : 
            return {
                layout : true,
                helpPage : false,
                helpPortal : true,
                searchPage : false
            }

        default :
            return state
    }
}