import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

function App() {
  //estados
  const [devs, setDevs] = useState([]);

  //A busca dos devs na API aconteça uma unica vez
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  //Funcao que é disparada quando o botao de submit for clicado
  async function handleAddDev(data) {
    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      {/* tag no HTML para fazer uma asidebar */}
      <aside>
        <strong>Cadastrar</strong>
        <DevForm
          onSubmit={handleAddDev}
        />
      </aside>
      <main>
        <ul>
          {/* Percorrer a array de devs e retornar alguma coisa */}
          {devs.map(dev => (
            //passando a propriedade dev para o componente
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
