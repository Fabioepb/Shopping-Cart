import React from 'react'
// import * as mui from 'material-ui'
import {connect} from 'react-redux'

// const style = theme => ({
//     root: {

//     }
// })

const CartItems = ({items}) => (
    <ul>
        {items.map(item =>
            <li key={item.id}>{item.name}</li>
        )}
    </ul>
)

class CartItemsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        }
    }
    componentDidMount = () => { // PASAR A OTRA FUNCION!
        fetch('http://localhost:10036/cart/items', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        }).then(response => response.json())
            .then(data => {
                this.setState({
                    items:data.items,
                })                
            }).catch(error => {
                console.log(error)
            })
    }

    render() {
        const {items} = this.state;
        const {item} = this.props;
        
        if(item) {
            items.push(item);
        }
        return <CartItems items={items}/>
    }
}

const stateToProps = state => {
    return {
        item: state.item,
    }
}

const ShoppingCart = connect(
    stateToProps,
)(CartItemsContainer)

export default ShoppingCart
