import React from 'react';
import logo from '../img/black-logo.png'

const styles = {
button: {
    backgroundColor : '#4267b2',
    color : 'white',
    height: '50px',
    display: 'block'
},

container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    alignContent: 'center'
},

fbIcon: {
    marginRight: '15px'
},

img: {
    display: 'block'
}


}
export default () =>(
<div className = "container" style = {styles.container}>
    <div className="row">
        <div className="col-12">
            <img src = {logo} height = "10" alt="" style={styles.img}/>
        </div>
    </div>
    <div className="row">
        <div className="col-12">
            <button type="button" className = "btn col-lg-3 " style = {styles.button}><i className="fab fa-facebook-square" style ={styles.fbIcon}></i> Acceder con Facebook</button>
        </div>
    </div>
</div>

)
