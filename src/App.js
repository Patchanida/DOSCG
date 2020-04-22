import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Resume from './components/Resume/Resume';
import Home from './components/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer'
class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Header />
            <div className="content text-left">
              <Switch>
                <Route sensitive strict exact path="/" component={Home} />
                <Route sensitive strict exact path="/resume" component={Resume} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;