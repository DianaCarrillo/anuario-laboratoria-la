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

  render() {
    const { user } = this.state;

    if (user === undefined) {
      return <div>Loading...</div>;
    }

    if (!user) {
      return <Login user={user} />;
    }

    return <Home user={user} />;
  }
}


export default App;
