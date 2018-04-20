import React from 'react'
import { Link } from 'react-router-dom'
import { isLogged } from '../Login/isLogged'


class Home extends React.Component {
    
    render() {
        return (
            <isLogged.Consumer>
                {({authType,changeAuth}) => (
                <div>
                    <h1>Welcome! {authType} asda1 </h1>
                    <button onClick={changeAuth}>test</button>
                    <Link to='/profile'> 
                        <button>profileTest</button>
                    </Link>
                </div>
                )}
            </isLogged.Consumer>
        );
    }
}

export default Home