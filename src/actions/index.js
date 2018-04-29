export const SET_CART_ITEMS = 'SET_CART_ITEMS'
export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'

export function setCartItems(items) {
    return {
        type: SET_CART_ITEMS,
        items,
    }
}

export function addToCart(items) {
    return {
        type: ADD_TO_CART,
        items,
    }
}

export function deleteFromCart(item) {
    return {
        type: DELETE_FROM_CART,
        item,
    }
}
