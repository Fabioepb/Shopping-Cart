import React from 'react'
import * as mui from 'material-ui'
import { addToCart } from './../store/actions'
import { connect } from 'react-redux'

// Presentational
const PresentationalOptions = ({ handleClick }) => (
    <mui.Button onClick={handleClick} color="primary" variant="raised">
        ADD to cart
    </mui.Button>
);

// Container
class ContainerOptions extends React.Component {
    handleCick = () => {    
        let {onCartUpdate} = this.props;
        fetch('http://localhost:10036/cart/items', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        }).then(response => response.json())
            .then(data => {                
                console.log(data)   
                onCartUpdate(data.items);
            }).catch(error => {
                console.log(error)
            })
    }
    render() {

        return (
            <PresentationalOptions handleClick={this.handleCick} />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCartUpdate: (items) => {
            dispatch(addToCart(items));
        }
    }
}

const CardOptions = connect(
    null,
    mapDispatchToProps,
)(ContainerOptions)

export default CardOptions