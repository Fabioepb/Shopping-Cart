import React from 'react'
// import * as mui from 'material-ui'
import {connect} from 'react-redux'

// const style = theme => ({
//     root: {

//     }
// })

class CartItems extends React.Component {
    render() {
        const {items} = this.props;

        return (
            <ul>
                {items.map(item =>
                    <li key={item.id}>{item.name}</li>
                )}
            </ul>   
        )
    }
}

const stateToProps = state => {
    return {
        items: state.items,
    }
}

const ShoppingCart = connect(
    stateToProps,
)(CartItems)

export default ShoppingCart
