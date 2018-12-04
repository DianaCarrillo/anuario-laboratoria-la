import React from 'react';

const styles = {
  text: {
    fontSize: '2em',
    textAlign: 'center'
  }
}

export default () => (
  <div>
    <div className="row" style={styles.text}>
      <div className="col-12">Para comenzar, selecciona un campus y una generación.</div>
    </div>
    <div className="row mt-4 mb-2">
      <div className="col-sm-12 col-md-6 mb-3">
        <label className="input-group-text mb-2" htmlFor="inputGroupSelect01">Campus</label>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div>
              <input type="checkbox" aria-label="Checkbox for following text input" value="lima" /> Lima
            </div>
            <div>
              <input type="checkbox" aria-label="Checkbox for following text input" value="santiago" /> Santiago
            </div>
            <div>
              <input type="checkbox" aria-label="Checkbox for following text input" value="cdmx" /> CDMX
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div>
              <input type="checkbox" aria-label="Checkbox for following text input" value="guadalajara" /> Guadalajara
            </div>
            <div>
              <input type="checkbox" aria-label="Checkbox for following text input" value="saopaulo" /> Sao Paulo
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Generaciones</label>
          </div>
          <select className="custom-select" id="inputGroupSelect01">
            <option value="defaultValue">Opciones...</option>
            <option value="1">Primera</option>
            <option value="2">Segunda</option>
            <option value="3">Tercera</option>
          </select>
        </div>
      </div>
    </div>
  </div>
);
