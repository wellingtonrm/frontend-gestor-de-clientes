import React from 'react';
import PaginaErro from './pages/404'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/index'
import Login from './pages/auth';

function Router()  {
    return (
         <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Login} />
            <Route exact component={PaginaErro} />
        </Switch>
    </BrowserRouter>
    )
   
    }
export default Router;