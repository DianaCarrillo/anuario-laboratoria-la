import React from 'react';

const styles = {
button: {
    backgroundColor : '#4267b2',
    color : 'white',
},

container: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    marginLeft: '60px'
},

fbicon: {
    marginRight: '15px'
}

}
export default () =>(
<div className = "container" style = {styles.container}>
    <button type="button" className = "btn col-lg-3 " style = {styles.button}><i className="fab fa-facebook-square" style ={styles.fbicon}></i> Acceder con Facebook</button>
</div>

)
