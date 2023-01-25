import { useState , useEffect } from 'react'

import NavBar from './Componentes/NavBar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';


function App() {
  const [count, setCount] = useState (0)
  const [fecha, setFecha] = useState (Date())

  console.log (count)

  const hanldeCount = () => {
    
    setCount (count + 1)
  }

  return (

    <>

    <NavBar />
    <ItemListContainer saludo='Buenas canciones, siempre' />
    <hr />
    
    <h3>
      click: {count}
    </h3>
    <button onClick={hanldeCount}>click</button>
    <h4>
      Fecha y hora: {Date()}
    </h4>

    </>

  )

}

export default App
