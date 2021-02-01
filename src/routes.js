import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main/main';
import Signin from './Pages/Login/login';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/" component={Main} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
