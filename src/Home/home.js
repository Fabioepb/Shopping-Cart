import React from 'react'
import {isLogged} from '../Login/isLogged'

class Home extends React.Component {
    
    render() {
        return (
            <isLogged.Consumer>
                {({authType,changeAuth}) => (
                <div>
                    <h1>Welcome! {authType} asda1 </h1>
                    <button onClick={changeAuth}>test</button>
                </div>
                )}
            </isLogged.Consumer>
        );
    }
}

export default Home