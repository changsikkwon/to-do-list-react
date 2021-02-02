import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main/main';
import SignIn from './Pages/Login/login';
import SignUp from './Pages/Login/signup';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/" component={Main} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
