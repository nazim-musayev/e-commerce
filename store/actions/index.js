import * as types from '../types'


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



//  WISHLIST

export const addToWishlist = payload => {
    return {
        type : types.ADD_TO_WİSHLİST,
        payload 
    }
}
export const removeFromWishlist = payload => {
    return {
        type : types.REMOVE_FROM_WİSHLİST,
        payload 
    }
}


//  SORTING PRODUCTS

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

//  FETCHING

// export const getProducts = () => dispatch => {
//     axios
//     .get("https://fakestoreapi.com/products")
//     .then( ({data}) => {
//         dispatch({type : types.GET_PRODUCTS_SUCCESS, payload : data})
//     })
//     .catch( error => {
//         dispatch({ type : types.GET_PRODUCTS_ERROR, payload : error})
//     })

// }

//  DISPLAY

export const displayHelpPage = () => {
    return {
        type : types.DISPLAY_HELP_PAGE
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