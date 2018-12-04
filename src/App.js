import React, { Component } from 'react';
import Home from './components/Home';
import Login from './components/Login';

class  App extends Component {
  constructor (props){
    super(props);
    this.state = {
      user : null
    }
  }

  render(){
  return(
    <div>
      <Login />
      {/* <Home /> */}
    </div>
  )
  }

  
};

export default App;