import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './NavBar/routes'
import TopBar from './NavBar/appBar'
import {isLogged} from './Login/isLogged'

class App extends React.Component {
    constructor() {
        super();
        this.changeAuth = () => {
            console.log('holas')
        }
        this.state = {
            authType: 'Invited mememeasd',
            changeAuth: this.changeAuth,
        }
    }
    render() {
        return (         
            <div>
                <isLogged.Provider value={this.state}>
                    <TopBar />
                    <Routes />
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
