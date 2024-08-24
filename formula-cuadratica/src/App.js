import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();

    const aVal = parseFloat(a);
    const bVal = parseFloat(b);
    const cVal = parseFloat(c);

    const discriminant = bVal * bVal - 4 * aVal * cVal;
    if (discriminant < 0) {
      setResult("No hay soluciones reales");
    } else {
      const sqrtDiscriminant = Math.sqrt(discriminant);
      const x1 = (-bVal + sqrtDiscriminant) / (2 * aVal);
      const x2 = (-bVal - sqrtDiscriminant) / (2 * aVal);
      setResult(`Las soluciones son: x1 = ${x1}, x2 = ${x2}`);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Calculadora de Fórmula Cuadrática</h1>
      <form onSubmit={handleCalculate}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Valor de a:
            <input
              type="number"
              value={a}
              onChange={(e) => setA(e.target.value)}
              required
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Valor de b:
            <input
              type="number"
              value={b}
              onChange={(e) => setB(e.target.value)}
              required
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Valor de c:
            <input
              type="number"
              value={c}
              onChange={(e) => setC(e.target.value)}
              required
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '5px 10px' }}>
          Calcular
        </button>
      </form>
      {result && (
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          {result}
        </div>
      )}
    </div>
  );
}

export default App;
