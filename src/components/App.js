import React from 'react';
import {Topbar} from './Topbar.js'
import {Main} from './Main.js'
import '../styles/App.css';
import {TOKEN_KEY} from '../constants';

class App extends React.Component{
  state = {
    isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY)),
  }

  handleLogin = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
    this.setState({
      isLoggedIn: true,
    });
  }

  handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    this.setState({
      isLoggedIn: false,
    });
  }

  render(){
    return (
      <div className="App">
        <Topbar isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
        <Main isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin}/>
      </div>
    );
  }
}

export default App;
