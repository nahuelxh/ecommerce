import { useState , useEffect } from 'react'

import NavBar from './Componentes/NavBar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';


function App(props) {
  
  return (

    <>
    <NavBar />
    <ItemListContainer saludo='Donde el tiempo y la distancia se juntan' />
    </>

  )

}

export default App
