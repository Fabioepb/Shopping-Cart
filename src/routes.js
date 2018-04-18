import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home/home'
import Login from './Login/login'

const Routes = () => (
    <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="/login" component={Login} />
    </Switch>
)

export default Routes