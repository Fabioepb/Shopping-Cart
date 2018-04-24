import { ADD_TO_CART } from "./actions";

function reducers(state = {item: null}, action) {
    switch(action.type) {
        case ADD_TO_CART: {
            return Object.assign({}, state, {
                type: ADD_TO_CART,
                item: action.item,
            })
        }
        default: {
            return state;
        }
    }
}

export default reducers