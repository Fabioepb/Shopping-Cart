import React from 'react'
import * as mui from 'material-ui'

const styles = theme => ({
    logButton: {
        color: 'white',
    },
})

class UserBar extends React.Component {
    render() {
        const { changeAuth, ...classes } = this.props;

        return (
            <div>                
                <mui.Button className={classes.logButton} onClick={this.handleLogout(changeAuth)}>LOGOUT</mui.Button>
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