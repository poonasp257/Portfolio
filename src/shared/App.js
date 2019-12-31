import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Project, Header, Footer } from 'container';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/project/:name" component={Project}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;