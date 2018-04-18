import React from 'react'
import { Link } from 'react-router-dom'
import * as mui from 'material-ui'

const CommonBar = (props) => {

    return (
        <Link to="/login" className={props.noLinkStyle}>
            <mui.Button style={{color:'white'}}>LOGIN</mui.Button>
        </Link>
    )
}

export default CommonBar
