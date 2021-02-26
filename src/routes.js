import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main/main';
import SignIn from './Pages/Login/login';
import SignUp from './Pages/Login/Signup';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apollo-client';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <ApolloProvider client={client}>
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/signin" component={SignIn} />
                        <Route exact path="/" component={Main} />
                    </ApolloProvider>
                </Switch>
            </Router>
        );
    }
}

export default Routes;
