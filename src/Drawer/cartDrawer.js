import React from 'react'
import * as mui from 'material-ui';
import PersonIcon from '@material-ui/icons/Person'

export const drawerWidth = 240;

const styles = theme => ({
    drawerPaper : {
        position:'relative',
        width: drawerWidth,
    },
    drawerHeader: {
        marginTop: theme.spacing.unit *10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 8px',
    },
})

class CartDrawer extends React.Component {

    render() {
        const {open,classes} = this.props;

        return (            
            <mui.Drawer 
            variant="persistent" 
            anchor="right"
            open={open} 
            classes={{ paper: classes.drawerPaper, }}
            >
             <div className={classes.drawerHeader}>
                <mui.IconButton>
                    <PersonIcon />
                </mui.IconButton>
            </div>   
            </mui.Drawer>
        )
    }

}
/* <div className={classes.drawerHeader}>
    <mui.IconButton onClick={handleDrawer}>
        C
    </mui.IconButton>
</div> */

export default mui.withStyles(styles)(CartDrawer)