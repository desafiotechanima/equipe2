import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const AuthRoutes = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        !(localStorage.getItem("token") && localStorage.getItem("user"))
            ? <Component {...props} />
            : <Redirect to='/user/index' />
    )} />
);

export default AuthRoutes;
