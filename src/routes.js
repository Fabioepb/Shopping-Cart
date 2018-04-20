import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './Home/home'
import Login from './Login/login'
import Profile from './Profile/profile'
import { isLogged } from './Login/isLogged'

const Routes = () => (
    <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/profile" component={Profile} />
    </Switch>
)

const PrivateRoute = ({
    component: Component,
    ...rest
}) => (
    <isLogged.Consumer>
        {({authType}) => (
            <div>
                {(authType === 'logged') ? (
                    <Route {...rest} render={(props => (
                        <Component {...props} />))} />) : (
                    <Redirect to='/login' />
                )}
            </div>
        )}
    </isLogged.Consumer>
);

export default Routes