import React from 'react';
import triangle from '../img/laboratoria_corchetes-m-30_960.png'
import firebase from '../firebase';
import TopBar from './TopBar'


const styles = {
  button: {
    backgroundColor: '#1da1f2',
    color: 'white',
    flex: 'none',
    display: 'block',
    marginTop: '30px'
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    alignContent: 'center'
  },
  img: {
    display: 'block',
    margin: '10px'
  },

  triangle: {
    marginTop: '100px',

  },
  laboranuario: {
    // fontSize: '500%',
    marginTop: '-150px',
    color: 'white'
  },
};


const Login = ({ user }) => {
  const loginTwitter = (e) => {
    const twitter = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(twitter)
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <TopBar user={user} />
      <div className="container" style={styles.container}>
        <h1 style={styles.laboranuario} className="animated pulse" width='100'>Laboranuario</h1>
        <button type="button" className="btn col-lg-3" onClick={loginTwitter} style={styles.button}> <i className="fab fa-twitter" style={styles.twitter} ></i> Acceder con twitter</button>
        <img alt="" src={triangle} style={styles.triangle} height="150" />
      </div>
    </div>
  )
}


export default Login;
