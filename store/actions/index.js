import * as types from '../types'
import axios from 'axios'

//  FETCHING-SORTING

export const getProducts = () => dispatch => {
    axios
    .get("https://fakestoreapi.com/products")
    .then( ({data}) => {
        dispatch({type : types.GET_PRODUCTS_SUCCESS, payload : data})
    })
    .catch( error => {
        dispatch({ type : types.GET_PRODUCTS_ERROR, payload : error})
    })

}

export const sortBy = ( products, sortingValue) => dispatch => {
    const sortedProducts = products.slice()
    if (sortingValue !== "") {
        sortedProducts.sort((a, b) => 
        sortingValue === "lowest" ? a.price - b.price : 
        sortingValue === "highest" ? b.price - a.price : 
        sortingValue === "a-z" ? a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1 :
        b.title.toUpperCase() > a.title.toUpperCase() ? 1 : -1 
        )
    } else {
        sortedProducts.sort((a, b) => (a.id - b.id ))
    }

    return dispatch({
        type : types.SORT_BY,
        payload : {
            sortingValue,
            sortedProducts
        }
    })
}


//  SHOPPING CART

export const addToCart = (items, product) => dispatch => {
    const cartItems = items.slice()
    let productInCart = false

    cartItems.map((item) => {
       if(item.id === product.id) {
           item.quantity += 1
           productInCart = true
       }
    })

    if(!productInCart) {
        cartItems.push({...product, quantity : 1 })
    }

    dispatch({ 
        type : types.ADD_TO_CART, 
        payload : { cartItems } 
    })
}


export const removeFromCart = (items, product) => (dispatch) => {
    const cartItems = items.slice().filter((a) => a.id !== product.id)
    const quantity = product.quantity
    dispatch({ 
        type: types.REMOVE_FROM_CART, 
        payload: { cartItems, quantity } 
    })
}

export const changeQuantity = (items, product, newQuantity) => dispatch => {
    const cartItems = items.slice()
    let count = 0

    count = newQuantity - product.quantity
    cartItems.map(item => item.id === product.id && ( item.quantity = newQuantity ))

    dispatch({
        type : types.CHANGE_QUANTITY,
        payload : { cartItems, count }
    })
}


//  WISHLIST

export const addToWishlist = (items, product) => dispatch => {
    const wishlist = items.slice()
    let count = 0

    if(wishlist.includes(product) === false) {
        wishlist.push(product)
        count = 1
    }

    dispatch ({
        type : types.ADD_TO_WİSHLİST,
        payload : { wishlist, count } 
    })
}
export const removeFromWishlist = (items, item) => dispatch =>{
    const wishlist = items.slice().filter((a) => a.id !== item.id)

    dispatch ({
        type : types.REMOVE_FROM_WİSHLİST,
        payload : { wishlist }
    })
}

export const clearWishlist = () => {
    return {
        type : types.CLEAR_WISHLIST
    }
}


//  DISPLAY

export const displayHelpPage = () => {
    return {
        type : types.DISPLAY_HELP_PAGE
    }
}

export const displayHelpPortal = () => {
    return {
        type : types.DISPLAY_HELP_PORTAL
    }
}

export const displaySearchPage = () => {
    return {
        type : types.DISPLAY_SEARCH_PAGE
    }
}

export const displayLayout = () => {
    return {
        type : types.DISPLAY_LAYOUT
    }
}

//  DIALOG

export const displayDialog = () => {
    return {
        type : types.DISPLAY_DIALOG
    }
}

export const closeDialog = () => {
    return {
        type : types.CLOSE_DIALOG
    }
}


//  NETLIFY IDENTITY

export const login = payload => {
    return {
        type : types.USER_LOGIN,
        payload
    }
}

export const logout = payload => {
    return {
        type : types.USER_LOGOUT,
        payload
    }
}


//  SEARCH PRODUCTS

export const searchForProducts = (products, searchWord) => dispatch => {
    const searchedProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchWord.toLowerCase()))
       
    return dispatch({
        type : types.SEARCH_FOR_PRODUCTS,
        payload : {
            searchedProducts,
            searchWord
        }
    })
}

export const clearInput = () => {
    return {
        type : types.CLEAR_SEARCH_INPUT
    }
}


//  NEWSLETTER LIST

export const addToList = (subscribers) => {
     
    return {
        type : types.ADD_TO_LIST,
        payload : subscribers
    }
}


//  MESSAGES

export const sendMessage = (data) => {
    const id = Math.floor(Math.random()*10000) + 1
    const message = {...data, id}

    return {
        type : types.SEND_MESSAGE,
        payload : message
    }

}


//  SNACKBAR

export const setSnackBar = (open, type, message) => {
    return {
        type : types.SET_SNACKBAR,
        payload : { open, type, message }
    }
}
