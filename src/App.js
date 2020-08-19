import React from 'react';
import Posts from './component/Posts'
import PostForm from "./component/PostForm";

import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { Provider } from 'react-redux';

import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/posts" component={Posts} />
                    <Route exact path="/post-form" component={PostForm} />

                    <Route>
                        <Redirect to="/posts" />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
