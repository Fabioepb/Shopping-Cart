import React from 'react'
import * as mui from 'material-ui';

export const drawerWidth = 240;

const styles = theme => ({
    drawerPaper : {
        backgroundColor:'black',
        position:'relative',
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // padding: '0 8px',
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