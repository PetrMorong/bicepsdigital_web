import React, { Component } from 'react';
import { BrowserRouter as Router, Route, HashRouter} from 'react-router-dom'

import About from './pages/About';
import OurWork from './pages/OurWork';


class App extends Component {
  render() {
    return (
        <div className="root">
            <Router history={HashRouter}>
                <div>
                    <Route exact path='/' component={OurWork} />
                    <Route path='/about' component={About} />
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
