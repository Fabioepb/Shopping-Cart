import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {isLogged} from './Login/isLogged'
import Main from './main'

class App extends React.Component {
    constructor() {
        super();     
        this.state = {
            authType: 'invited',
            changeAuth: this.handleAuth,
        }
    }
    handleAuth = (auth) => {
        this.setState(state => ({
            authType: 
                state.authType === 'invited'
                ? 'logged'
                : 'invited',
        }))
    }
    render() {
        return (         
            <div>
                <isLogged.Provider value={this.state}>                    
                    <Main /> 
                </isLogged.Provider>
            </div>              
        );
    }
}

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));