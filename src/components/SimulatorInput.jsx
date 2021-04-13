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
        <div className="sim-separator" style={{ marginBottom: '20px' }} />
        <div className="content-row">
          <p className="sim-title">Tipo de reemplazo</p>
          <ItemSelection
            name="reemplazo"
            items={['LRU', 'FIFO', 'ALEATORIO']}
          />
        </div>
        <div className="content-row" style={{ marginTop: '20px' }}>
          <p className="sim-title">Tipo de mapeo</p>
          <ItemSelection
            name="mapeo"
            items={['Directo', 'Por conjuntos', 'Asociativo']}
          />
        </div>
        <div className="sim-separator" style={{ marginTop: '20px' }} />
        <b style={{ marginTop: '20px' }}>Avanzadas</b>
        <div style={{ marginTop: '20px' }} className="content-row">
          <p className="sim-title" style={{ marginRight: '10px' }}>
            Tipo de caché
          </p>
          <ItemSelection name="tipo" items={['Unificada', 'Mixta']} />
          <p
            className="sim-title"
            style={{ marginRight: '10px', marginLeft: '10px' }}
          >
            Política escritura
          </p>
          <ItemSelection name="politica" items={['Directa', 'Al retorno']} />
        </div>
        <div style={{ marginTop: '20px' }} className="content-row">
          <p className="sim-title">Políticas de fallo de escritura</p>
          <ItemSelection
            name="fallo"
            items={['Ubicar en escritura', 'No ubicar en escritura']}
          />
        </div>
      </div>
    </div>
  );
};

export default SimulatorInput;
