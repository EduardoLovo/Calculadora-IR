import { useState } from 'react';
import './App.css';

function App() {

  const [notas, setNotas] = useState([
    {
      id: 1,
      data: "2022/07/03",
      tipo: "Compra",
      preco: "100",
      quantidade: "10",
      taxa: "8.5"
    },
    {
      id: 2,
      data: "2022/05/03",
      tipo: "Venda",
      preco: "200",
      quantidade: "8",
      taxa: "5.3"
    }
  ])


  // =========================================



  return (

    <div className="App">

      <div className='notasView'>

        <ul>
          <div className='titulos'>
            <span>Data</span>
            <span>Tipo</span>
            <span>Preço</span>
            <span>Quantidade</span>
            <span>Taxa</span>
          </div>

          {notas.map((f) => (

            <div className='divNota'>

              <button className='btnCal'>calcular</button>

              <li key={f.id} className='line'>
                <p>{f.data}</p>

                <p>{f.tipo}</p>

                <p>{f.preco}</p>

                <p>{f.quantidade}</p>

                <p>{f.taxa}</p>
              </li>

              <p>resultado</p>

            </div>

          ))}
        </ul>

      </div>
    </div>
  );
}

export default App;
