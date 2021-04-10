import React from 'react';
import '../styles/components/SimulatorInput.scss';
import ItemSelection from './ItemSelection';

const SimulatorInput = () => {
  return (
    <div className="sim-container">
      <p className="text">Configuración de la simulación</p>
      <p className="text">1/2</p>
      <div className="sim-content">
        <div className="content-row">
          <div className="sim-item">
            <p className="sim-title">Tamaño de caché</p>
            <input type="text" className="sim-input" />
          </div>
          <div className="sim-item">
            <p className="sim-title">Tamaño de bloque</p>
            <input type="text" className="sim-input" />
          </div>
        </div>
        <div className="content-row">
          <div className="sim-item">
            <p className="sim-title">Tamaño de MP</p>
            <input type="text" className="sim-input" />
          </div>
          <div className="sim-item">
            <p className="sim-title">Tamaño de palabra</p>
            <input type="text" className="sim-input" />
          </div>
        </div>
        <div className="sim-separator" />
        <div className="content-row" style={{marginTop: '20px'}}>
          <p className="sim-title">Tipo de reemplazo</p>
          <ItemSelection items={['LRU', 'FIFO', 'ALEATORIO']} />
        </div>
      </div>
    </div>
  );
};

export default SimulatorInput;
