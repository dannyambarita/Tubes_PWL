import Login from './login&signup/Login'
import Signup from './login&signup/Signup'
import App from './App'
import React from 'react'
import { Route } from 'react-router-dom'

function Controller() {
    return (
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
        </div>
    );
}

export default Controller;

