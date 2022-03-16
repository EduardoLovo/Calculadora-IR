import { useState } from 'react';
import './App.css';

function App() {

  // Exemplos ========

  const [notas, setNotas] = useState([
    {
      id: 1,
      data: "2022-03-15",
      tipo: "Compra",
      preco: "100",
      quantidade: "10",
      taxa: "8.5"
    },
    {
      id: 2,
      data: "2022-03-16",
      tipo: "Venda",
      preco: "200",
      quantidade: "8",
      taxa: "5.3"
    }
  ])

  // =========================================

  // Formulario =======

  const [data, setData] = useState("");
  const [tipo, setTipo] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [taxa, setTaxa] = useState("");

  const handleDataChange = (e) => {
    setData(e.target.value);
  }
  const handleTipoChange = (e) => {
    setTipo(e.target.value);
  }
  const handlePrecoChange = (e) => {
    setPreco(e.target.value);
  }
  const handleQuantidadeChange = (e) => {
    setQuantidade(e.target.value);
  }
  const handleTaxaChange = (e) => {
    setTaxa(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    setNotas([
      ...notas,
      {
        data: data,
        tipo: tipo,
        preco: preco,
        quantidade: quantidade,
        taxa: taxa
      }
    ])

    setData('')
    setTipo('')
    setPreco('')
    setQuantidade('')
    setTaxa('')

  }


  // =========================================



  const [resultado, setResultado] = useState('')


  const handleResultadoChange = (e) => {
    e.preventDefault();

    setResultado('Resultado')
    // }
  }


  return (

    <div className="App">

      {/* Formulario ========== */}

      <div className='divAdd'>
        <form className='add' onSubmit={handleSubmit}>
          <div className='input'>
            <label>Data</label>
            <input
              type='date'

              value={data}
              placeholder='um'
              onChange={handleDataChange}
            />
          </div>

          <div className='input'>
            <label >Tipo</label>
            <select name="select"
              onChange={handleTipoChange}
              value={tipo}>
              <option placeholder='...'></option>
              <option value="Compra">Compra</option>
              <option value="Venda" selected>Venda</option>
            </select>
          </div>

          <div className='input'>
            <label >Preço</label>
            <input
              type='number'
              step="0.01"
              min="0"
              placeholder='R$ 59.90'
              value={preco}
              onChange={handlePrecoChange}
            />
          </div>

          <div className='input'>
            <label >Quantidade</label>
            <input
              type='number'
              placeholder='Ex. 5'
              value={quantidade}
              onChange={handleQuantidadeChange}
            />
          </div>

          <div className='input'>
            <label >Taxa</label>
            <input
              type='number'
              step="0.01"
              min="0"
              placeholder='Ex. 8.50'
              value={taxa}
              onChange={handleTaxaChange}
            />
          </div>
          <div className='divBtn'>
            <button type="submit" value="Add" className='btnAdd'>Add</button>

          </div>
        </form>
      </div>

      {/* ====================================== */}


      {/* Lista de Notas ========== */}

      <div className='notasView'>

        <ul className='acoes'>
          <div className='titulos'>
            <span>Data</span>
            <span>Tipo</span>
            <span>Preço</span>
            <span>Quantidade</span>
            <span>Taxa</span>
          </div>

          {notas.map((f) => (

            <div className='divNota'>


              <li key={f.id} className='line'>
                <p>{f.data}</p>

                <p>{f.tipo}</p>

                <p>R$ {f.preco}</p>

                <p>{f.quantidade}</p>

                <p>{f.taxa}</p>
              </li>

            </div>

          ))}
        </ul>

        <button className='btnCal' onClick={handleResultadoChange}>Calcular</button>


        {/* Resultadp ------ */}

        <div className='results'>{resultado}</div>

      </div>

      {/* ====================================== */}



    </div>
  );
}

export default App;
