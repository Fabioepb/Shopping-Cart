export const ADD_TO_CART = 'ADD_TO_CART'

export function addToCart(items) {
    return {
        type: ADD_TO_CART,
        items,
    }
}