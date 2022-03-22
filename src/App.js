import { useState } from 'react';
import './App.css';


function App() {

  // Exemplos ==============================

  const [notas, setNotas] = useState([
    {
      id: 1,
      data: "2022-03-15",
      tipo: "Compra",
      preco: 25.90,
      quantidade: 100,
      taxa: 8.5
    },

    {
      id: 2,
      data: "2022-03-16",
      tipo: "Venda",
      preco: 27.39,
      quantidade: 50,
      taxa: 8.5
    }
  ])

  // ==========================================================================================

  // Formulario =============================

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
        id: notas.length + 1,
        data: data,
        tipo: tipo,
        preco: +preco,
        quantidade: +quantidade,
        taxa: +taxa
      }
    ])

    setData('')
    setTipo('')
    setPreco('')
    setQuantidade('')
    setTaxa('')
  }

  // ============================================================================================


  // State para mostrar resultado ===============

  const [resultado, setResultado] = useState('')

  const handleResultadoChange = (e) => {
    e.preventDefault();


    // Calculo para COMPRAS =====================
    const pm = 0
    const qm = 0

    const somaPreco = []
    const somaQuantidade = []

    for (var i of notas) {
      if (i.tipo === "Compra") {
        const precoMedio = (pm * qm + i.preco * i.quantidade + i.taxa) / (qm + i.quantidade);
        somaPreco.push(precoMedio)

        somaQuantidade.push(i.quantidade)

        var resultPreco = somaPreco.reduce(function (soma, i) {
          const resultado = (resultPreco + i)
          return resultado;
        });

        var resultadoQuant = somaQuantidade.reduce(function (resultadoQuant, i) {
          const resultado2 = (resultadoQuant + i)
          return resultado2;
        });
      }
    }

    var resultadoPrecoMedio = (resultPreco / somaPreco.length).toFixed(2)

    // ==========================================================================================


    // Calculo para VENDAS =====================
    const testeVEnda = []

    for (var i of notas) {
      if (i.tipo === "Venda") {
        testeVEnda.push(i)

        var venda = () => {
          const calculandoVenda = testeVEnda.map((fVendas) => {

            var ra = (fVendas.preco - resultadoPrecoMedio) * fVendas.quantidade - fVendas.taxa;

            var lk = () => {
              var prejuizo = resultadoPrecoMedio - fVendas.preco
              if (prejuizo < 0) {

                var ir = (ra - (ra, prejuizo)) * (15 / 100);

                return (
                  <div key='prejuizo'>
                    Prejuizo Acumulado =  0<br />
                    RA de {ra.toFixed(2)}, incidirá IR de {ir.toFixed(2)}
                  </div>
                )

              } else {

                return (
                  <div key='prejuizo'>
                    Prejuizo Acumulado = {prejuizo.toFixed(2)} <br />
                  </div>
                )
              }
            }

            resultadoQuant = resultadoQuant - fVendas.quantidade

            return (
              <div key='resultVenda'>
                <h2>Resultado Venda - Linha {fVendas.id}</h2>
                Preço Medio = {resultadoPrecoMedio} < br />
                Quantidade Media = {resultadoQuant} <br />
                {lk()}<br /> <br />
              </div>)
          })
          return calculandoVenda
        }
      }
    }

    setResultado(
      <div >
        <h2>Resultado Compras</h2>
        Preço Medio = {resultadoPrecoMedio} <br />
        Quantidade Media = {resultadoQuant} <br />
        Prejuizo Acumulado = 0 <br /> <br />

        {venda()}
      </div>

    )

  }

  // ==========================================================================================


  return (

    <div className="App">

      {/* Formulario ================================== */}

      <div className='divAdd'>
        <form className='add' onSubmit={handleSubmit}>
          <div className='input'>
            <label>Data</label>
            <input
              type='date'
              name={tipo}
              value={data}
              placeholder='um'
              onChange={handleDataChange}
            />
          </div>

          <div className='input'>
            <label >Tipo</label>
            <select name="select"
              onChange={handleTipoChange}
              value={tipo}
            >

              <option>...</option>
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

      {/* ========================================================================== */}


      {/* Lista de Notas ================== */}

      <div className='notasView'>

        <ul className='acoes'>
          <div className='titulos'>
            <span>Data</span>
            <span>Tipo</span>
            <span>Preço</span>
            <span>Quantidade</span>
            <span>Taxa</span>
          </div>

          {notas.map((f, index) => (

            <div className='divNota' key={index}>


              <li key={f.id} className='line'>
                <p>{f.data}</p>

                <p>{f.tipo}</p>

                <p>R$ {f.preco.toFixed(2)}</p>

                <p>{f.quantidade}</p>

                <p>{f.taxa}</p>
              </li>

            </div>

          ))}
        </ul>

        <button className='btnCal' onClick={handleResultadoChange}>Calcular</button>


        {/* Resultado ============== */}

        <div className='results'>{resultado}</div>

      </div>

      {/* ============================================================================ */}

    </div>
  );
}

export default App;
