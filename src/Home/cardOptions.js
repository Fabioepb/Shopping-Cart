import React from 'react'
import * as mui from 'material-ui'
import { addToCart } from './../store/actions'
import { connect } from 'react-redux'

// Presentational
const Options = ({ handleClick }) => (
    <mui.Button onClick={handleClick} color="primary" variant="raised">
        ADD to cart
    </mui.Button>
);

// Container
class OptionsContainer extends React.Component {

    handleClick = () => {
        let { onCartUpdate } = this.props;
        let body = {
            productId: this.props.id,
            quantity: 1, // TODO: cambiar por cantidad DINAMICA
        }
        fetch('http://localhost:10036/cart/add', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials:'include',
            body: JSON.stringify(body),
        }).then(response => response.json())
        .then(data => {
            onCartUpdate(data.item);
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        
        return (
            <Options handleClick={this.handleClick} />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCartUpdate: (item) => {
            dispatch(addToCart(item));
        }
    }
}

const CardOptions = connect(
    null,
    mapDispatchToProps,
)(OptionsContainer)

export default CardOptions