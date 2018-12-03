import React from 'react';

const styles = {
  fontSize: '2em',
  textAlign : 'center'
}

export default () => (
  <div>
    <div className="row mt-4">
      <div className="col-sm-12 col-md-6">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Sede</label>
          </div>
          <select className="custom-select" id="inputGroupSelect01">
            <option value="defaultValue">Opciones</option>
            <option value="1">Lima</option>
            <option value="2">Santiago</option>
            <option value="3">Mexico</option>
            <option value="4">Guadalajara</option>
            <option value="5">Sao Paulo</option>
          </select>
        </div>
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Generacion</label>
          </div>
          <select className="custom-select" id="inputGroupSelect01">
            <option value="defaultValue">Opciones</option>
            <option value="1">Primera</option>
            <option value="2">Segunda</option>
            <option value="3">Tercera</option>
          </select>
        </div>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-12">
        <p style={styles}> Para empezar, selecciona un campus y una generacion.</p>
      </div>
    </div>
  </div>
);
