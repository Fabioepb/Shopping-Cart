import React from 'react'
import { Link } from 'react-router-dom'
import { isLogged } from '../Login/isLogged'
import ProductCard from './cards'
import * as mui from 'material-ui'

const styles = theme => ({
    root: {
        marginLeft: 20,
    }
})

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }
    
    render() {
        const {classes} = this.props;
        const products = this.state.list;
        const list = products.map((product) =>
            <mui.Grid key={product.productid} item>
                <ProductCard data={product} />
            </mui.Grid>
        )

        return (
            <div className={classes.root}>
                <isLogged.Consumer>
                    {({authType,changeAuth}) => (
                        <div style={{marginBottom:20}}>
                            <h1>Welcome! {authType} asda1 </h1>
                            <mui.Button variant="raised" onClick={changeAuth}>test</mui.Button>
                            <Link to='/profile'>
                                <mui.Button variant="raised">profileTest</mui.Button>
                            </Link>
                        </div>
                    )}
                </isLogged.Consumer>
                <mui.Grid container spacing={24}>
                    {list}
                </mui.Grid>
            </div>
        );
    }
    componentDidMount() {
        fetch('http://localhost:10036/product/list', {
            method: 'GET',                        
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        }).then(response => response.json())
        .then(data => {
            this.setState({
                list: data.list
            });
        }).catch(error => {
            console.log(error)
        })
    }
}

export default mui.withStyles(styles)(Home)