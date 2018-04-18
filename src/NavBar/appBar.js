import React from 'react';
import { Link } from 'react-router-dom';
import { isLogged } from '../Login/isLogged'
import * as mui from 'material-ui/';
import CommonBar from './commonBar'
import UserBar from './userBar'

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    title: {
        color: 'white',
        marginTop: 5,
    },
    noLinkStyle: {
        textDecoration: 'none',
        fontColor: 'white',
    },
});

class TopBar extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <mui.AppBar position="static" color="secondary">
                    <mui.Toolbar>
                        <mui.Grid container justify="space-between">
                            <mui.Grid item>
                                <Link to="/" className={classes.noLinkStyle}>
                                <mui.Typography variant="title" className={classes.title}>
                                    Shopping-cart
                                </mui.Typography>
                                </Link>
                            </mui.Grid>
                            <mui.Grid item>
                                <isLogged.Consumer>
                                    {({authType,changeAuth}) => (
                                    <div>
                                        {(authType==='invited') ? (
                                        <CommonBar noLinkStyle={classes.noLinkStyle} /> ) : (
                                        <UserBar changeAuth={changeAuth}/>
                                        )}
                                    </div>
                                    )}
                                </isLogged.Consumer>
                            </mui.Grid>
                        </mui.Grid>
                    </mui.Toolbar>
                </mui.AppBar>
            </div>
        );
    }
}

export default mui.withStyles(styles)(TopBar);