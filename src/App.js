import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer'
class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Header>
            </Header>
            <Switch>
              <Route sensitive strict exact path="/" component={Home} />
            </Switch>
            <Footer></Footer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;