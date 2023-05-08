import React, {useContext} from 'react'
import {Route, Navigate} from 'react-router-dom'
import { AuthContext } from './auth'



function AuthRoute({component: Component, ...rest}){
    const {user} = useContext(AuthContext);

    return (
        <div>
            <Route 
                {...rest}
                element = {user ? <Navigate to ='/'/> : <Component/>}
            />
        </div>
    );
}

export default AuthRoute;