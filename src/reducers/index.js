import { SET_CART_ITEMS, ADD_TO_CART, DELETE_FROM_CART } from "../actions";

function reducers(state = {items: [], item: null}, action) {
    switch(action.type) {
        case SET_CART_ITEMS: {
            return Object.assign({}, state, {
                type: SET_CART_ITEMS,
                items: action.items,
            });
        }
        case ADD_TO_CART: {
            return Object.assign({}, state, {
                type: ADD_TO_CART,
                items: action.items,
            });
        }
        case DELETE_FROM_CART: {

            return null;
        }
        default: {
            return state;
        }
    }
}

export default reducers