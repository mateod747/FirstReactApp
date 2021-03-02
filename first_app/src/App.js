import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Countries from './Countries';
import Homepage from './Homepage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CountryDetails from './CountryDetails';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/about" component={About} />
                    <Route path="/countries" exact component={Countries} />
                    <Route path="/countries/name/:name" component={CountryDetails} />
                </Switch>                
            </div>
        </Router>
    );
}

export default App;
