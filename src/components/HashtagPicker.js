import React from 'react';

const campuses = {
  lim: 'Lima',
  scl: 'Santiago',
  cdmx: 'Ciudad de México',
  gdl: 'Guadalajara',
  spl: 'Sao Paulo',
};

const styles = {
  button: {
    width: '100%',
    margin: 'auto'
  }
}


export default ({ campus, generation, handleCampusChange, handleGenerationChange, clickButtonCampuses, checkboxesOpen }) => (
  <div>
    <div className="row mt-4 mb-2">
      <div className="col-sm-12 col-md-6 mb-3">
        <button type="button" className="btn input-group-text mb-2" style={styles.button} onClick={clickButtonCampuses}>Selecciona tu campus <div className="ml-auto"><i className="fas fa-sort-down"></i></div></button>
        {checkboxesOpen && (
          <div className="row">
            <div className="col-6">
              {Object.keys(campuses).map(key => (
                <div key={key}>
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                    value={key}
                    onClick={handleCampusChange}
                  /> {campuses[key]}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Generaciones</label>
          </div>
          <select onChange={handleGenerationChange} className="custom-select" id="inputGroupSelect01">
            <option value="defaultValue">Opciones...</option>
            <option value="1">Primera</option>
            <option value="2">Segunda</option>
            <option value="3">Tercera</option>
            <option value="4">Cuarta</option>
            <option value="5">Quinta</option>
            <option value="6">Sexta</option>
          </select>
        </div>
      </div>
    </div>
  </div>
);
