import React from 'react';
import logo from '../img/black-logo.png'
import triangle from '../img/laboratoria_corchetes-m-30_960.png'
import firebase from '../firebase';

const styles = {
  button: {
    backgroundColor : '#1da1f2',
    color : 'white',
    flex: 'none',
    // height: '50px',
    display: 'block',
    // paddingRight: '10px'
  },
      
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    alignContent: 'center'
  },
      
  fbIcon: {
    marginRight: '5px',
    textAlign:'left'        
  },
      
  img: {
    display: 'block',
    margin:'30px'
  },

  triangle: {
    margin:'30px'
  }
}

const Login = (props) => {
        
  const loginTwitter = (e) => {
    const twitter = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(twitter)
    .catch((error) => {
      console.log(error);
    })
  }
        
  return (
    <div className = "container" style = {styles.container}>
      <img src = {logo} height = "50" alt="" style={styles.img}/>
      <h1>Laboranuario</h1>
      <button type="button" className = "btn col-lg-3 " onClick= {loginTwitter} style = {styles.button}><i className="fab fa-twitter-square fa-2x" style ={styles.fbIcon}></i> Acceder con twitter</button>
      <img alt="" src={triangle}  style ={styles.triangle} height="100"/>
    </div>
  ) 
}

export default Login;

