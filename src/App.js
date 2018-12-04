import React, { Component } from 'react';
import firebase from './firebase';
import Home from './components/Home';
import Login from './components/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : undefined,
    }
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  handleLogOut = () => {
    console.log('bye')
  }

  render() {
    if (this.state.user === undefined) {
      return <div>Loading...</div>;
    }

    if (!this.state.user) {
      return <Login />;
    }

    return <Home logOut = {this.handleLogOut} />;
  }
}


export default App;
