import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

import Header from './components/template/header/Header';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Users from './pages/users/Users';

function PrivateRoute({ component: Component, ...rest }) {
    const { signed } = useAuth();

    return (
        <Route {...rest} render={props => (
            signed ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname: '/'}}/>
            )
        )}/>
    );
}

export default function Routes() {

    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Login}/>
                <PrivateRoute path='/home' component={Home}/>
                <PrivateRoute path='/users' component={Users}/>
            </Switch>
        </BrowserRouter>
    );
}
