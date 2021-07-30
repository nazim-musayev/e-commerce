import * as types from '../types'
import axios from 'axios'


//  COUNTER

// export const basketIncrement = () => {
//     return {
//         type : types.BASKET_INCREMENT
//     }
// }

// export const basketDecrement = () => {
//     return {
//         type : types.BASKET_DECREMENT
//     }
// }

// export const wishlistIncrement = () => {
//     return {
//         type : types.WISHLIST_INCREMENT
//     }
// }

// export const wishlistDecrement = () => {
//     return {
//         type : types.WISHLIST_DECREMENT
//     }
// }

//  ADDING-REMOVING


export const addToCart = (items, product) => dispatch => {
    const cartItems = items.slice()
    let productInCart = false

    cartItems.map((item) => {
       if(item.id === product.id) {
           item.count += 1
           productInCart = true
       }
    })

    if(!productInCart) {
        cartItems.push({...product, count : 1 })
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems))

    dispatch({ type : types.ADD_TO_CART, payload : {cartItems} })
}


export const removeFromCart = (items, product) => (dispatch) => {
    const cartItems = items.slice().filter((a) => a.id !== product.id);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: types.REMOVE_FROM_CART, payload: { cartItems } });
  }


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

export const sortBy = ( sortedProducts, sortingValue) => dispatch => {
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