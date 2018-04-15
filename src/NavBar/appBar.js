import React from 'react';
import { Link } from 'react-router-dom';
import * as mui from 'material-ui/';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    noLinkStyle: {
        textDecoration: 'none'
    },
});

class TopBar extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <mui.AppBar position="static" color="secondary">
                    <mui.Toolbar>
                        <Link to="/" className={classes.noLinkStyle}>
                            <mui.Typography variant="title" style={{ color: 'white' }}>
                                Shopping-cart
                            </mui.Typography>
                        </Link>
                        <Link to="/login" className={classes.noLinkStyle}>
                            <mui.Button color="default" >LOGIN</mui.Button>
                        </Link>
                    </mui.Toolbar>
                </mui.AppBar>
            </div>
        );
    }
}

export default mui.withStyles(styles)(TopBar);