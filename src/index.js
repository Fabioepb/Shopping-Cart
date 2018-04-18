import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import TopBar from './NavBar/appBar'
import {isLogged} from './Login/isLogged'

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
                    <TopBar state={this.state.authType} />
                    <Routes state={this.state.authType} />
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