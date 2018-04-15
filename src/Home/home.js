import React from 'react'
import {isLogged} from '../Login/isLogged'

const Home = () => (
  <isLogged.Consumer>
    { ({authType,handleAuth}) => ( 
      <div>
        <h1>Welcome! {authType} asd {handleAuth}</h1>
        <button onClick={handleAuth}>test</button>
      </div>
     )}
   </isLogged.Consumer>
)

export default Home