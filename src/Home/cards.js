import React from 'react'
import * as mui from 'material-ui'
import {isLogged} from './../Login/isLogged'

const styles = theme => ({
    card: {
        width: 275,
    },
    header: {
        marginBottom:'10px',
    },
    info: {
        display:'flex',
        justifyContent:'space-between',
    },
    action: {
        display:'flex',
        justifyContent: 'flex-end',
    },
    cover: {
        width: 275,
        height: 150,
    },
})

class ProductCard extends React.Component {

    render() {
        const {classes} = this.props;
        const {name,username,price,stock} = this.props.data;
        // brand,description,img

        return (
            <mui.Card className={classes.card}>
                <mui.CardMedia image="./static/images/cards/samsung.png" title="imageTitle" className={classes.cover} />
                <mui.CardContent>
                    <div className={classes.header}>
                        <mui.Typography variant="title">
                            {name}
                        </mui.Typography>
                        <mui.Typography variant="caption">
                            by {username}
                        </mui.Typography>
                    </div>
                    <div className={classes.info}>
                        <mui.Typography>
                            ${price}
                        </mui.Typography>
                        <mui.Typography>
                            On stock: {stock}
                        </mui.Typography>
                    </div>
                </mui.CardContent>            
                    <isLogged.Consumer>                                                
                    {({authType}) => (
                        <mui.CardActions className={classes.action}>
                            {(authType==='invited') ? (
                                <div />) : (
                                <Options />
                            )}
                        </mui.CardActions>             
                    )}                              
                </isLogged.Consumer>
            </mui.Card>
        );
    }
}

const Options = (props) => (
    <mui.Button color="primary" variant="raised">
        ADD to cart
    </mui.Button>
);

export default mui.withStyles(styles)(ProductCard)
