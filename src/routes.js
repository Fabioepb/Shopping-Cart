import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './scenes/Home'
import Login from './scenes/Login/'
import Profile from './scenes/Profile/'
import { isLogged } from './contexts/isLogged'

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