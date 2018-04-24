import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { isLogged } from './Login/isLogged'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './store/reducers'
import Main from './main'

let store = createStore(reducers);

class App extends React.Component {
    constructor() {
        super();     
        this.state = {
            authType: 'invited',
            changeAuth: this.handleAuth,
        }
    }
    // TODO: fix login validation
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
                <Provider store={store}>
                    <isLogged.Provider value={this.state}>                    
                        <Main /> 
                    </isLogged.Provider>
                </Provider>
            </div>              
        );
    }
}

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));