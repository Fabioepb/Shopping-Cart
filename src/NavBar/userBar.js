import React from 'react'
import * as mui from 'material-ui'
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    logButton: {
        color: 'white',
    },
})

class UserBar extends React.Component {
    render() {
        const { changeAuth, handleDrawer, ...classes } = this.props;

        return (
            <div>                
                <mui.Button className={classes.logButton} onClick={this.handleLogout(changeAuth)}>LOGOUT</mui.Button>
                <mui.IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawer}                                            
                > 
                    <MenuIcon />
                </mui.IconButton>
            </div>
        )
    }

    handleLogout = callback => () => {
        fetch('http://localhost:3001/user/logout', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        }).then(response => response.json())
        .then(data => {
            if(data.status === 200) {
                callback();
            }
            console.log(data)
        }).catch(error => {
            console.log(error)
        })
    }
}

export default mui.withStyles(styles)(UserBar)