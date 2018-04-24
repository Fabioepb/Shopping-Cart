import { ADD_TO_CART } from "./actions";

function reducers(state = {items: []}, action) {
    switch(action.type) {
        case ADD_TO_CART: {
            return Object.assign({}, state, {
                type: ADD_TO_CART,
                items: action.items,
            })
        }
        default: {
            return state;
        }
    }
}

export default reducers